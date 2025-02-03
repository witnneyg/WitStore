import mongoose, { Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  slug: string;
  description: string;
  basePrice: mongoose.Types.Decimal128;
  imageUrls: string[];
  categoryId: string;
  discountPercentage: number;
  category: mongoose.Schema.Types.ObjectId;
}

const ProductSchema = new mongoose.Schema<IProduct>({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  description: { type: String, required: true },
  basePrice: { type: mongoose.Types.Decimal128 },
  imageUrls: [String],
  categoryId: { type: String, required: true },
  discountPercentage: { type: Number, default: 0 },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

ProductSchema.methods.toJSON = function () {
  const product = this.toObject();
  try {
    if (product.basePrice) {
      product.basePrice = parseFloat(product.basePrice.toString());
    }
  } catch (error) {
    console.error(error);
  }
  return product;
};

export const Product =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);
