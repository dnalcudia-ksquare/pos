import { Router, Request, Response } from 'express';
import { invoiceGetController, invoicePostController, invoiceUpdateController, invoiceDeleteController } from '../controllers'; // This should not be here

export const register = (router: Router) => {
  /**
   * POST /publishers
   * Create a new product
   */
  router.post('/invoices/', (req: Request, res: Response) => invoicePostController.run(req, res));
  
  /**
   * GET /
   * Get all products
   */
  router.get('/invoices/', (req: Request, res: Response) => invoiceGetController.run(req, res));

  /**
   * PUT /
   * Update a single invoice
   */
  router.put('/invoices/:id/', (req: Request, res: Response) => invoiceUpdateController.run(req, res));

  /**
   * DELETE /
   * Delete a single invoice
   */
  router.delete('/invoices/:id/', (req: Request, res: Response) => invoiceDeleteController.run(req, res));
};
