import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "./Controller";
import { InvoicesService } from 'src/services'; // This should not be here

export class InvoiceUpdateController implements Controller {
constructor(private service: InvoicesService) {};

  async run(req: Request, response: Response): Promise<void> {
      const { date, amount } = req.body;
    const { id } = req.params;

    try {
      const invoice = await this.service.updateInvoice( id, date, parseInt(amount) );
      response.status(httpStatus.CREATED).json(invoice);
    } catch (error) {
      response.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
