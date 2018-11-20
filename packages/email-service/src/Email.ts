import { MailData } from '@sendgrid/helpers/classes/mail';
import sendGrid from '@sendgrid/mail'
import * as R from 'ramda'
import SparkPost from 'sparkpost'

interface IEmailOptions {
  engine: 'SPARKPOST' | 'SENDGRID',
}
export default class Email {
  public static FROM_EMAIL = 'no_reply@thebanana.co'
  public static FROM_NAME = 'no reply'

  private config: MailData = { from: Email.FROM_EMAIL }
  private engine: any

  constructor(options: IEmailOptions) {
    this.startEngine(options.engine)
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

  private startEngine(engine: IEmailOptions['engine']) {
    switch (engine) {
      case 'SENDGRID':
        sendGrid.setApiKey(process.env.SEND_GRID_KEY || '')
        break;
      case 'SPARKPOST':
        const spark = new SparkPost(process.env.SPARKPOST_KEY)
        break;
    }
  }
}