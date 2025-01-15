import { Router } from "express";
import { updatedProductById } from "../services/dashboard";

const router = Router();

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
    const { name, basePrice } = req.params;

    if (!name || !basePrice) {
      return res
        .status(400)
        .json({ message: "Nome e preço base são obrigatórios." });
    }

    const updatedProduct = await updatedProductById();

    console.log("foi");

    return res.status(200).json(updatedProduct);
  } catch (error) {
    return res.status(500).json({ error: "Erro" });
  }
});

export default router;
