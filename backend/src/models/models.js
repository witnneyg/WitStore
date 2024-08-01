import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  imageUrl: { type: String },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

export const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  description: { type: String },
  basePrice: { type: mongoose.Types.Decimal128 },
  imageUrls: [String],
  categoryId: { type: String, required: true },
  discountPercentage: { type: Number, default: 0 },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
