import sendGrid from '@sendgrid/mail'
import * as R from 'ramda'
import * as Rx from 'rxjs'
import { catchError, retry, tap } from 'rxjs/operators'

import { db } from '../db'
import emailHistoryModel, { emailHistoryField, IEmailHistoryModel } from '../db/models/emailHistoryModel';
import { Queue } from '../lib'
import { IEmailForm } from "./MailBuilder"

// const operatorSendGrid = async (config: IEmailForm) => {
//   try {
//     const result = await sendGrid.send(config)
//     return result
//   } catch (error) {
//     return Promise.reject(error)
//   }
// }

export default class Mailer extends Queue {
  constructor() {
    super()
    sendGrid.setApiKey(process.env.SEND_GRID_KEY || '')
  }

  public async sendMail() {
    try {
      console.log(await emailHistoryModel.create({
        attemp: 1,
        create_at: new Date(),
        email: 'g.kawin@live.com',
        status: 'FAILURE',
      } as IEmailHistoryModel))
    } catch (error) {
      console.log('da', error)
    }
    // const source$ = Rx.from(this.getQueue())
    // const request$ = source$
    //   .pipe(
    //     tap((queue) => {
    //       const getRetry = R.pathOr(0, ['priority', 'retry'])
    //       return Rx.from(operatorSendGrid(queue.priority))
    //         .pipe(
    //           catchError(error => Rx.of(`Bad Promise: ${error}`)),
    //           retry(getRetry(queue))
    //         )
    //     }),

    //   )
    // request$.subscribe()
  }
}