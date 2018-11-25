import mongoose, { Document } from 'mongoose'
import { IEmailForm } from '../../email/MailBuilder';

interface IEmailHistoryField {
  attemp: number
  create_at?: Date
  email: string
  status: 'FAILURE' | 'SUCCEED' | 'WAITING',
  configuration: IEmailForm,
  update_at?: Date,
  provider?: 'SEND_GRID' | 'SPARKPOST'
}

export interface IEmailHistoryModel extends IEmailHistoryField, Document { }

const emailHistoryModel = new mongoose.Schema({
  attemp: { type: Number, required: true },
  configuration: { type: Object, required: true },
  create_at: Date,
  email: { type: String, required: true },
  provider: { type: String },
  status: { type: String, required: true },
  update_at: Date,
})

export default mongoose.model<IEmailHistoryModel>('email_history', emailHistoryModel)