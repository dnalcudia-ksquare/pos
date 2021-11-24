import { Condition } from 'mongoose';
import { Invoice, InvoiceCreationAttributes, InvoiceAttributes } from '../models/Invoice';

export class InvoicesService {
  async addInvoice(invoiceInfo: InvoiceCreationAttributes): Promise<InvoiceAttributes> {
    try {
      var invoice = new Invoice(invoiceInfo);
      invoice.save();
      return invoice;
    } catch (error) {
      throw new Error('Error creating a invoice');
    }
  }

  async getInvoices(id: string): Promise<Array<InvoiceAttributes>> {
    try {
      return await Invoice.find({id: id as Condition<number>});
    } catch (error) {
      throw new Error('Error getting invoices');
    }
  }

  async updateInvoice(id: string, date: Date, amount: number): Promise<String> {
    Invoice.findByIdAndUpdate(
      id,
      {
        date: date,
        amount: amount,
      },
      { new: true },
      (err, todo) => {
        if (err) return "Error updating invoice";
      });
      return "Invoice succesfully updated!";
  }

    async deleteInvoice(id: string): Promise<String> {
    Invoice.findByIdAndRemove(
      id, (err: string) => {
        if (err) return "Error deleting that invoice";
      });
      return "Invoice succesfully deleted!";
  }
}

