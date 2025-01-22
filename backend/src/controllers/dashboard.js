import { Router } from "express";
import { UpdatedProductById } from "../services/dashboard.js";
import multer from "multer";
import { storage } from "../utils/multerConfig.js";

const router = Router();
const upload = multer({ storage: storage });

router.get("/", async (req, res) => {
  try {
    return res.status(200).json("dashboard");
  } catch (error) {
    return res.status(500).json({ error: "Erro" });
  }
});

router.put("/products/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const { name, basePrice } = req.body;

    if (!name || !basePrice) {
      return res.status(400).json({ error: "Name and price are required" });
    }

    const updatedProduct = await UpdatedProductById(productId, name, basePrice);

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found." });
    }

    return res.status(200).json(updatedProduct);
  } catch (error) {
    return res.status(500).json({
      error: "An error occurred while updating the product.",
    });
  }
});

router.post("/createProduct", upload.single("image"), (req, res) => {
  try {
    return res.status(201).json("");
  } catch (error) {
    return res
      .status(500)
      .send({ error: "An error occurred while creating the product" });
  }
});

export default router;
