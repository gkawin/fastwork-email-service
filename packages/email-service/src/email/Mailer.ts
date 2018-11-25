import sendGrid from '@sendgrid/mail'
import * as Rx from 'rxjs'
import { delayWhen, mergeMap, retryWhen, switchMap, takeWhile } from 'rxjs/operators'
import SparkPost from 'sparkpost'

import emailHistoryModel, { IEmailHistoryModel } from '../db/models/emailHistoryModel'

const findAll$ = (ids: string[]) => Rx.from(Promise.all<IEmailHistoryModel>(
  ids.concat.apply([], ids).map(((id: string) => emailHistoryModel.findOne({ _id: id })))
))

export default class Mailer {
  private sparkPost = {} as SparkPost
  constructor() {
    sendGrid.setApiKey(process.env.SEND_GRID_KEY || '')
    this.sparkPost = new SparkPost(process.env.SPARKPOST_KEY)
  }

  public async sendMail() {
    const source$ = Rx.timer(1000, 3000)
    source$
      .pipe(
        switchMap(async () => {
          const item = await emailHistoryModel.find({
            $or: [
              { status: 'WAITING' }, { status: 'FAILURE' }
            ]
          }, { _id: true })
          return item.map<string>(v => v._id)
        }),
        takeWhile(ids => ids.length > 0),
        switchMap(findAll$),
        switchMap(this.sendMail$('SEND_GRID')),
        retryWhen((errors) => errors.pipe(
          switchMap(this.sendMail$('SPARKPOST')),
          delayWhen(() => Rx.timer(1000))
        )),
      )
      .subscribe({
        error: (e) => {
          console.log("hahahahha", e)
        }
      })
  }

  public sendMail$ = (mailProvider: IEmailHistoryModel['provider']) => (values: IEmailHistoryModel[]) => (
    Rx.from(values)
      .pipe(
        mergeMap(model => {
          if (mailProvider === 'SEND_GRID') {
            return Rx.from(sendGrid.send(model.configuration)
              .then(async () => {
                await emailHistoryModel.findByIdAndUpdate(model._id, { status: 'SUCCEED', provider: 'SEND_GRID' })
                return Rx.of('done')
              })
              .catch(async (error) => {
                console.log(' UNABLE TO USE SEND GRID')
                await emailHistoryModel.findByIdAndUpdate(model._id, { status: 'FAILURE', provider: 'SEND_GRID' })
                return Rx.throwError(error.message)
              })
            )
          }
          return Rx.from(this.sparkPost.transmissions.send({
            content: {
              from: model.configuration.from as string,
              html: model.configuration.html,
              subject: model.configuration.subject || '<div>no html content</div>',
            },
            options: { sandbox: true },
            recipients: [{ address: model.configuration.to as string }],
          })
            .then(async () => {
              await emailHistoryModel.findByIdAndUpdate(model._id, { status: 'SUCCEED', provider: 'SPARKPOST' })
              return Rx.of('done')
            })
            .catch(async (error) => {
              console.log(' UNABLE TO USE SPARKPOST')
              await emailHistoryModel.findByIdAndUpdate(model._id, { status: 'FAILURE', provider: 'SPARKPOST' })
              return Rx.throwError(error.message)
            }))
        })
      )
  )
}

