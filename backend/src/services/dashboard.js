import { databaseConnection } from "../lib/database.js";
import { Product } from "../models/models.js";

export async function UpdatedProductById(productId, name, basePrice) {
  await databaseConnection();

  const res = await Product.findByIdAndUpdate(
    productId,
    {
      name,
      basePrice,
    },
    {
      new: true,
    }
  );

  return res;
}
