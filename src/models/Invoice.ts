import { model, Schema } from 'mongoose';

export interface InvoiceAttributes {
  id?: number;
  amount: number;
  date: Date;
}

export interface InvoiceCreationAttributes extends InvoiceAttributes {};

const schema = new Schema<InvoiceAttributes>({
  id: { type: Number, required: false },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
});

export const Invoice = model<InvoiceAttributes>('Invoice', schema);