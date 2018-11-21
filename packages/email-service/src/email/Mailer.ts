import { MongoClient } from "mongodb";
import { db } from '../db'
import { IEmailForm } from "./MailBuilder";

interface IMailerOptions {
  db: MongoClient,
  transports: IEmailForm[]
}

export default class Mailer {
  constructor(options: IMailerOptions) {
    db.then((res) => {

    })
  }

  public pushTransporter() {

  }

  public sendMail() {

  }
}