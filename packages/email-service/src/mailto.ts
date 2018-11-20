import express, { NextFunction } from 'express'
// import db from './DBConnection'
import Email from './Email'

export default function mailto(req: express.Request, res: express.Response, next: NextFunction) {
  // db.get().then((respose) => {
  //   respose.collection('test').insertOne(req.body)
  // }).catch(console.log)
  const email = new Email({
    engine: 'SENDGRID'
  })
  email
    .subject('test mail')
    .text('ba')
    .sentTo('g.kawin@live.com')
  res.send({ fuck: 'you' })
  next()
}