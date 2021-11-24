import { ProductsService } from "./products.service";
import { InvoicesService } from "./invoices.service";

const productsService = new ProductsService();
const invoicesService = new InvoicesService();

/**
 * We should not export the class to use as type.
 * 
 * The services should be behind an abstraction like
 * commandBus who knows details about the services
 * 
*/
export { productsService, ProductsService, invoicesService, InvoicesService }
