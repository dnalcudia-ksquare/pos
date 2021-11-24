import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "./Controller";
import { InvoicesService } from 'src/services'; // This should not be here

export class InvoiceGetController implements Controller {
  constructor(private service: InvoicesService) {};

  async run(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {      
      const invoices = await this.service.getInvoices(id);
      res.status(httpStatus.CREATED).json(invoices);
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
