import { Router } from "express";

import multer from "multer";
import { storage } from "../../utils/multerConfig.js";
import { CreateProductController } from "./createProduct.js";
import { CreateProductRepository } from "../../repositories/dashboard/createProduct.js";

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

export default router;
