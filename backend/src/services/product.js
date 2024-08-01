import { databaseConnection } from "../lib/database.js";
import { Product } from "../models/models.js";

export async function getProduct() {
  await databaseConnection();
  const getProduct = await Product.find();
  return getProduct;
}
