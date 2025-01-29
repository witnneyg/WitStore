import { Router } from "express";
import {
  createProduct,
  deleteProductById,
  findCategoryByName,
  updatedProductById,
} from "../services/dashboard.js";
import multer from "multer";
import { storage } from "../utils/multerConfig.js";
import { Product } from "../models/models.js";

const router = Router();
const upload = multer({ storage: storage });

router.put("/products/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const { name, basePrice } = req.body;

    if (!name || !basePrice) {
      return res.status(400).json({ error: "Name and price are required" });
    }

    const updatedProduct = await updatedProductById(productId, name, basePrice);

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found." });
    }

    return res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
});

router.post("/createProduct", upload.single("image"), async (req, res) => {
  try {
    const { name, description, basePrice, categoryName } = req.body;

    console.log(categoryName, "create");

    if (!name || !description || !basePrice || !categoryName) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const categoryData = await findCategoryByName(categoryName);

    console.log(categoryData);

    if (!categoryData) {
      return res.status(404).json({ message: "Category not found." });
    }

    const imageUrls = req.file
      ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`
      : null;

    const slug = name
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();

    const newProduct = await createProduct({
      name,
      slug,
      description,
      basePrice,
      categoryId: categoryData._id,
      imageUrls,
    });

    return res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
});

router.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await deleteProductById(id);

    return res.status(204).send("Product deleted successfully");
  } catch (error) {
    console.error("Error deleting product:", error);

    if (error.message === "Product not found.") {
      return res.status(404).json({ error: error.message });
    }

    return res.status(500).json({ error: "Internal server error." });
  }
});

export default router;
