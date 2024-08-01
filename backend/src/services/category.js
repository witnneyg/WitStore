import { databaseConnection } from "../lib/database.js";
import { Category } from "../models/models.js";

export async function getCategory() {
  await databaseConnection();
  const getCategory = await Category.find();
  return getCategory;
}
