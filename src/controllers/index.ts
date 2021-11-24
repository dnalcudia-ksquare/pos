import { productsService, invoicesService } from '../services'; // This should not be here
import { ProductsGetController } from './ProductsGetController.controller';
import { ProductPostController } from './ProductsPostController.controller';
import { ProductUpdateController } from './ProductsUpdateController.controller';
import { ProductDeleteController } from './ProductsDeleteController.controller';
import { InvoiceGetController } from './InvoicesGetController';
import { InvoicePostController } from './InvoicesPostController';
import { InvoiceUpdateController } from './InvoicesUpdateController';
import { InvoiceDeleteController } from './InvoicesDeleteController';

export const productGetController = new ProductsGetController(productsService);
export const productUpdateController = new ProductUpdateController(productsService);
export const productDeleteController = new ProductDeleteController(productsService);
export const productPostController = new ProductPostController(productsService);
export const invoiceGetController = new InvoiceGetController(invoicesService);
export const invoicePostController = new InvoicePostController(invoicesService);
export const invoiceUpdateController = new InvoiceUpdateController(invoicesService);
export const invoiceDeleteController = new InvoiceDeleteController(invoicesService);