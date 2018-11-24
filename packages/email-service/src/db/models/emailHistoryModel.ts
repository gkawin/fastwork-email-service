import mongoose, { Document } from 'mongoose'

interface IEmailHistoryField {
  attemp: number
  create_at?: Date
  email: string
  status: 'FAILURE' | 'SUCCEED' | 'WAITING',
  configuration: string,
}

export interface IEmailHistoryModel extends IEmailHistoryField, Document { }

const emailHistoryModel = new mongoose.Schema({
  attemp: { type: Number, required: true },
  configuration: { type: String, required: true },
  create_at: Date,
  email: { type: String, required: true },
  status: { type: String, required: true },
})

export default mongoose.model<IEmailHistoryModel>('email_history', emailHistoryModel)