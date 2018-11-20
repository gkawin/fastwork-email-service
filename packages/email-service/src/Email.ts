import { EmailAddress } from '@sendgrid/helpers/classes';
import { MailData } from '@sendgrid/helpers/classes/mail';
import sendGrid from '@sendgrid/mail'
import * as R from 'ramda'


export default class Email {
  public static FROM_EMAIL = 'no_reply@thebanana.co'
  public static FROM_NAME = 'no reply'

  private config: MailData = { from: Email.FROM_EMAIL }

  constructor() {
    sendGrid.setApiKey(process.env.SEND_GRID_KEY || '')
  }

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

  public async sentTo(to: string) {
    this.config = R.assoc('to', to, this.config)

    try {
      const result = await sendGrid.send(this.config)
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }
}