import express from 'express'
import * as R from 'ramda'
import emailHistoryModel, { IEmailHistoryModel } from '../db/models/emailHistoryModel';
import MailBuilder from '../email/MailBuilder'
import Mailer from '../email/Mailer'

const mail = new Mailer()
const email = new MailBuilder()

export default async function mailto(req: express.Request, res: express.Response) {
  const to: string = R.pathOr('', ['body', 'mailto'], req)
  const emailConfiguration = email
    .subject('foo bar')
    .text('what???')
    .html('<div>bababab</div>')
    .to('g.kawin@live.com')
    .retry(2)
    .export()

  try {
    const result = await emailHistoryModel.create({
      attemp: 0,
      configuration: JSON.stringify(emailConfiguration),
      create_at: new Date(),
      email: to,
      status: 'WAITING',
    } as IEmailHistoryModel)


    if (R.isEmpty(result)) {
      throw new Error('cannot create model')
    }

    res.send({ status: 'success' })
  } catch (error) {
    res.send({ status: 'failure', message: error.message })
    return new Error(error)
  }
}