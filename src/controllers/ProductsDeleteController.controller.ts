import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "./Controller";
import { ProductsService } from 'src/services'; // This should not be here

export class ProductDeleteController implements Controller {
  constructor(private service: ProductsService) {};

  async run(req: Request, response: Response): Promise<void> {
      const { id } = req.params;

    try {
      const product = await this.service.deleteProduct( id );
      response.status(httpStatus.CREATED).json(product);
    } catch (error) {
      response.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
