import { Router, Request, Response } from 'express';
import { productGetController, productPostController, productUpdateController, productDeleteController } from '../controllers'; // This should not be here

export const register = (router: Router) => {
  /**
   * POST /publishers
   * Create a new product
   */
  router.post('/products/', (req: Request, res: Response) => productPostController.run(req, res));
  
  /**
   * GET /
   * Get all products
   */
  router.get('/products/', (req: Request, res: Response) => productGetController.run(req, res));

  /**
   * PUT /
   * Update a single product
   */
  router.put('/products/:id/', (req: Request, res: Response) => productUpdateController.run(req, res));

  /**
   * DELETE /
   * Delete a single product
   */
  router.delete('/products/:id/', (req: Request, res: Response) => productDeleteController.run(req, res));
};
