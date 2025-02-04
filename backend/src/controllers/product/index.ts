import { Router } from "express";
import { GetProductRepository } from "../../repositories/product/getProduct.js";
import { GetProductController } from "./getProduct.js";
import { GetProductBySlugController } from "./getProductBySlug.js";
import { GetProductBySlugRepository } from "../../repositories/product/getProductById.js";

const router = Router();

router.get("/", async (req, res) => {
  const getProductRepository = new GetProductRepository();

  const getProductController = new GetProductController(getProductRepository);

  const { body, statusCode } = await getProductController.handle();

  res.status(statusCode).send(body);
});

router.get("/:slug", async (req, res) => {
  const getProductBySlugRepository = new GetProductBySlugRepository();

  const getProductBySlugController = new GetProductBySlugController(
    getProductBySlugRepository
  );

  const { body, statusCode } = await getProductBySlugController.handle({
    params: req.params.slug,
  });

  res.status(statusCode).send(body);
});

export default router;
