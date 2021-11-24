import { Sequelize } from 'sequelize/types';
import { Product } from './Product';
import { Invoice } from './Invoice';

export const registerSQLModels = (client: Sequelize) => {
  /**
   * This is the place where your models will be initialized
   * 
   */
  Product.init();
  Invoice.init();
}
