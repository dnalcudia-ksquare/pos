import { Condition } from 'mongoose';
import { Product, ProductCreationAttributes, ProductAttributes } from '../models/Product';

export class ProductsService {
  async addProduct(productInfo: ProductCreationAttributes): Promise<ProductAttributes> {
    try {
      var product = new Product(productInfo);
      product.save();
      return product;
    } catch (error) {
      throw new Error('Error creating a product');
    }
  }

  async getProducts(productId: string): Promise<Array<ProductAttributes>> {
    try {
      return await Product.find({productId: productId as Condition<number>});
    } catch (error) {
      throw new Error('Error getting comments');
    }
  }

  async updateProduct(id: string, name: string, price: number): Promise<String> {
    Product.findByIdAndUpdate(
      id,
      {
        name: name,
        price: price,
      },
      { new: true },
      (err, todo) => {
        if (err) return "Error updating product";
      });
      return "Product succesfully updated!";
  }

    async deleteProduct(id: string): Promise<String> {
    Product.findByIdAndRemove(
      id, (err: string) => {
        if (err) return "Error deleting that product";
      });
      return "Product succesfully deleted!";
  }
}

