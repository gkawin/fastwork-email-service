import { Request, Response } from "express";
import * as R from 'ramda'
import emailHistoryModel from "../db/models/emailHistoryModel";


export default async function maillog(req: Request, res: Response): Promise<void> {
  try {

    const results = await emailHistoryModel.find()
    if (!R.isEmpty(results)) {
      res.send(results.map((result) =>
        ({ email: result.email, status: result.status, create_at: result.create_at })
      ))
    }
  } catch (error) {
    console.log(error.message)
    res.send([])
  }
}