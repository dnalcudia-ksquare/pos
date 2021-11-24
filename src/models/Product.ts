import { model, Schema } from 'mongoose';

export interface ProductAttributes {
  id?: number;
  name: string;
  price: number;
}

export interface ProductCreationAttributes extends ProductAttributes {};

const schema = new Schema<ProductAttributes>({
  id: { type: Number, required: false },
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

export const Product = model<ProductAttributes>('Product', schema);