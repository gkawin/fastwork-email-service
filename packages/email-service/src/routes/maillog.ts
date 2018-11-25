import { Request, Response } from "express";


export default async function mailto(req: Request, res: Response) {
  res.send([
    { email: 'yaya@yay.com' }
  ])
}