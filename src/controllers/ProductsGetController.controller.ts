import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "./Controller";
import { ProductsService } from 'src/services'; // This should not be here

export class ProductsGetController implements Controller {
  constructor(private service: ProductsService) {};

  async run(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {      
      const products = await this.service.getProducts(id);
      res.status(httpStatus.CREATED).json(products);
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
