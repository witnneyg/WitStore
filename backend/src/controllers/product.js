import { Router } from "express";
import { getProduct, getProductById } from "../services/product.js";
import { storage } from "../utils/multerConfig.js";
import multer from "multer";

const router = Router();
const upload = multer({ storage: storage });

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

router.post("/createProduct", upload.single("image"), (req, res) => {
  try {
    return res.status(201).json();
  } catch (error) {
    return res.status(500).send(error);
  }
});

export default router;
