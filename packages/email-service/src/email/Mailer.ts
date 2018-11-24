import sendGrid from '@sendgrid/mail'
import * as R from 'ramda'
import * as Rx from 'rxjs'
import { catchError, retry, tap } from 'rxjs/operators'

import { Queue } from '../lib'
import { IEmailForm } from "./MailBuilder"

const operatorSendGrid = async (config: IEmailForm) => {
  try {
    const result = await sendGrid.send(config)
    return result
  } catch (error) {
    return Promise.reject(error)
  }
}

export default class Mailer extends Queue {
  constructor() {
    super()
    sendGrid.setApiKey(process.env.SEND_GRID_KEY || '')
  }

  public async sendMail() {
    const source$ = Rx.from(this.getQueue())
    const request$ = source$
      .pipe(
        tap((queue) => {
          const getRetry = R.pathOr(0, ['priority', 'retry'])
          return Rx.from(operatorSendGrid(queue.priority))
            .pipe(
              catchError(error => Rx.of(`Bad Promise: ${error}`)),
              retry(getRetry(queue))
            )
        }),

      )
    request$.subscribe()
  }
}