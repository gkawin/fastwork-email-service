import { Request, Response } from "express";
import * as R from 'ramda'
import emailHistoryModel from "../db/models/emailHistoryModel";


export default async function maillog(req: Request, res: Response): Promise<void> {
  try {
    const results = await emailHistoryModel.find()
    if (!R.isEmpty(results)) {
      res.send(results.map((result) =>
        ({
          create_at: result.create_at,
          email: result.email,
          provider: result.provider,
          status: result.status,
        })
      ))
    }
  } catch (error) {
    console.log(error.message)
    res.send([])
  }
}