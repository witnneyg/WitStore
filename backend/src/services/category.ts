import { MongoClient } from "../database/mongo.js";
import { Category } from "../models/categorySchema.js";

export async function getCategory() {
  await MongoClient.connect();

  const getCategory = await Category.find().populate("products");
  return getCategory;
}

export async function getCategoryBySlug(slug) {
  await MongoClient.connect();

  const getCategoryBySlug = await Category.findOne({ slug }).populate(
    "products"
  );
  return getCategoryBySlug;
}

export async function getCategoryById(categoryId) {
  await MongoClient.connect();

  const getCategoryById = await Category.findById(categoryId).populate(
    "products"
  );
  return getCategoryById;
}
