import sendGrid from '@sendgrid/mail'
import * as R from 'ramda'
import * as Rx from 'rxjs'
import { switchMap, takeUntil, takeWhile } from 'rxjs/operators'
import emailHistoryModel from '../db/models/emailHistoryModel';


// const noWaiting$ = Rx.


export default class Mailer {
  constructor() {
    sendGrid.setApiKey(process.env.SEND_GRID_KEY || '')
  }

  public async sendMail() {
    const source$ = Rx.timer(1000, 3000)
    source$
      .pipe(
        switchMap(async () => {
          const item = await emailHistoryModel.find({ status: 'WAITING' }, { _id: true })
          return item.map(v => v._id)
        }),
        takeWhile(x => x.length > 0)
      )
      .subscribe((ids: string[]) => {
        try {
          console.log(ids)
          ids.forEach(async (id) => {
            await emailHistoryModel.findOneAndUpdate({ _id: id }, { status: 'SUCCEED' })
          })

        } catch (error) {
          console.log(error.message)
        }

      })
  }
}

