import mongoose, { Document } from "mongoose";

export interface ICategory extends Document {
  name: string;
  slug: string;
  imageUrl: string;
  products: mongoose.Types.ObjectId[];
}

const CategorySchema = new mongoose.Schema<ICategory>({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  imageUrl: { type: String },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

export const Category =
  mongoose.models.Category ||
  mongoose.model<ICategory>("Category", CategorySchema);
