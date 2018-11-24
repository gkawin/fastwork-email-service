import express from 'express'
import MailBuilder from '../email/MailBuilder'
import Mailer from '../email/Mailer'

const mail = new Mailer()
const email = new MailBuilder()

export default function mailto(req: express.Request, res: express.Response) {
  const result = email
    .subject('test mail')
    .text('ba')
    .to('g.kawin@live.com')
    .export()

  const result1 = email
    .subject('foo bar')
    .text('what???')
    .html('<div>bababab</div>')
    .to('g.kawin@live.com')
    .retry(2)
    .export()

  mail.enQueue(result, 'asd')
  mail.enQueue(result1, 'bar')

  console.log(mail.sendMail())

  res.send(result)
}