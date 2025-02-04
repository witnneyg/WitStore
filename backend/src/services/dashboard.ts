import { MongoClient } from "../database/mongo.js";
import { Category } from "../models/categorySchema.js";
import { Product } from "../models/productSchema.js";

export async function updatedProductById(productId, name, basePrice) {
  await MongoClient.connect();

  try {
    return await Product.findByIdAndUpdate(
      productId,
      { name, basePrice },
      { new: true }
    );
  } catch (error) {
    console.error("Error updating product:", error);
    throw new Error("Internal error updating the product.");
  }
}

export async function findCategoryByName(categoryName) {
  await MongoClient.connect();

  return await Category.findOne({ name: categoryName });
}

export async function createProduct(productData) {
  await MongoClient.connect();

  try {
    const newProduct = new Product(productData);
    await newProduct.save();

    await Category.findByIdAndUpdate(productData.categoryId, {
      $push: { products: newProduct._id },
    });

    return newProduct;
  } catch (error) {
    console.error("Error creating product:", error);
    throw new Error("Failed to create product.");
  }
}

export async function deleteProductById(productId) {
  await MongoClient.connect();

  try {
    const product = await Product.findById(productId);

    if (!product) {
      throw new Error("Product not found.");
    }

    await Product.findByIdAndDelete(productId);

    await Category.findByIdAndUpdate(product.categoryId, {
      $pull: { products: productId },
    });
  } catch (error) {
    console.error("Error deleting product", error);
    throw new Error("Internal error when deleting the product.");
  }
}
