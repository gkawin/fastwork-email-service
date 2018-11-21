import express from 'express'
import MailBuilder from '../Email/MailBuilder';


export default function mailto(req: express.Request, res: express.Response) {

  const email = new MailBuilder()
  console.log(email
    .subject('test mail')
    .text('ba')
    .to('g.kawin@live.com')
    .export())
  res.send({ ffff: 'da' })
}