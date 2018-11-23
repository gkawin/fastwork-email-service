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

  mail.enQueue(result, 'asd')

  console.log(mail.sendMail())

  res.send(result)
}