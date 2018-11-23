import { MailData } from '@sendgrid/helpers/classes/mail';
import * as R from 'ramda'

export interface IEmailForm extends MailData {
  retry?: number
}

export default class MailBuilder {
  public static FROM_EMAIL = 'no_reply@thebanana.co'
  private config: IEmailForm = { from: MailBuilder.FROM_EMAIL }

  public subject(title: string) {
    this.config = R.assoc('subject', title, this.config)
    return this
  }

  public text(text: string) {
    this.config = R.assoc('text', text, this.config)
    return this
  }

  public html(html: string) {
    this.config = R.assoc('html', html, this.config)
    return this
  }

  public retry(interval: number) {
    this.config = R.assoc('retry', interval, this.config)
    return this
  }

  public to(to: string) {
    this.config = R.assoc('to', to, this.config)
    return this
  }

  public export() {
    return this.config
  }
}