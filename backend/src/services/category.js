import { databaseConnection } from "../lib/database.js";
import { Category } from "../models/models.js";

export async function getCategory() {
  await databaseConnection();
  const getCategory = await Category.find().populate("products");
  return getCategory;
}

export async function getCategoryById(categoryId) {
  await databaseConnection();

  const getCategoryById = await Category.findById(categoryId).populate(
    "products"
  );
  return getCategoryById;
}
