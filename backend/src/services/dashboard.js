import { databaseConnection } from "../lib/database.js";
import { Product } from "../models/models.js";

export async function UpdatedProductById(productId, name, basePrice) {
  await databaseConnection();

  const res = await Product.findByIdAndUpdate(
    productId,
    { name, basePrice },
    { new: true }
  );

  return res;
}

export async function createProduct(
  name,
  category,
  basePrice,
  description,
  imageUrls
) {
  await databaseConnection();

  console.log("oi");

  try {
    const newProduct = new Product({
      name,
      slug: category,
      basePrice,
      description,
      imageUrls,
    });

    await newProduct.save();

    return res.status(201).json(newProduct);
  } catch (error) {
    console.error("Erro ao criar produto:", error);
    return res.status(500).json({ message: "Erro ao criar o produto." });
  }
}
