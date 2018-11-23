import * as Rx from 'rxjs'
import { retry } from 'rxjs/operators'
import { Queue } from '../lib'
import { IEmailForm } from "./MailBuilder"

Rx.pipe(
  retry(3)
)

export default class Mailer extends Queue {
  public async sendMail() {
    const queues = this.getQueue()
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < queues.length; i += 1) {
      const config = queues[i].priority
    }
  }
}