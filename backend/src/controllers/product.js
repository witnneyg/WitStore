import { Router } from "express";
import { getProduct, getProductById } from "../services/product.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const product = await getProduct();
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:productSlug", async (req, res) => {
  try {
    const product = await getProductById(req.params.productSlug);
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
