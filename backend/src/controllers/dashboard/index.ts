import { Router } from "express";

import multer from "multer";
import { storage } from "../../utils/multerConfig.js";
import { CreateProductController } from "./createProduct.js";
import { CreateProductRepository } from "../../repositories/dashboard/createProduct.js";
import { DeleteProductRepository } from "../../repositories/dashboard/deleteProduct.js";
import { DeleteProductController } from "./deleteProduct.js";
import { UpdateProductController } from "./updateProduct.js";
import { UpdateProductRepository } from "../../repositories/dashboard/updateProduct.js";

const router = Router();
const upload = multer({ storage: storage });

router.post("/products", upload.single("image"), async (req: any, res) => {
  const createProductRepository = new CreateProductRepository();

  const createProductController = new CreateProductController(
    createProductRepository
  );

  const { body, statusCode } = await createProductController.handle({
    body: req.body,
    file: req.file,
  });

  res.status(statusCode).send(body);
});

router.delete("/products/:id", async (req, res) => {
  const deleteProductRepository = new DeleteProductRepository();

  const deleteProductController = new DeleteProductController(
    deleteProductRepository
  );

  const { statusCode, body } = await deleteProductController.handle({
    params: { id: req.params.id },
  });

  res.status(statusCode).send(body);
});

router.put("/products/:productId", async (req, res) => {
  const { name, basePrice } = req.body;
  const { productId } = req.params;

  const updateProductRepository = new UpdateProductRepository();

  const updateProductController = new UpdateProductController(
    updateProductRepository
  );

  const { statusCode, body } = await updateProductController.handle({
    params: { productId },
    body: { name, basePrice },
  });

  res.status(statusCode).send(body);
});

export default router;
