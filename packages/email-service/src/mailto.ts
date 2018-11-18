import express, { NextFunction } from 'express'
import db from './DBConnection'

export default function mailto(req: express.Request, res: express.Response, next: NextFunction) {
  db.get().then((respose) => {
    respose.collection('test').insertOne(req.body)
  }).catch(console.log)
  res.send({ fuck: 'you' })
  next()
}