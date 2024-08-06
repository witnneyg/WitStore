import { databaseConnection } from "../lib/database.js";
import { Product } from "../models/models.js";

export async function getProduct() {
  await databaseConnection();

  const getProduct = await Product.find().populate("category");

  return getProduct;
}

export async function getProductById(productSlug) {
  await databaseConnection();
  const getProductBySlug = await Product.findOne({ slug: productSlug });

  return getProductBySlug;
}
