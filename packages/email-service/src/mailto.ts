import express, { NextFunction } from 'express'

export default function mailto(req: express.Request, res: express.Response, next: NextFunction) {
  console.log(req.body)
  res.send({ fuck: 'you' })
}