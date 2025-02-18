import { Router } from "express";
import { GetCategoriesRepository } from "../../repositories/categories/get-categories-repository.js";
import { GetCategoriesController } from "./getCategory.js";
import { GetCategoryBySlugRepository } from "../../repositories/categories/getCategoryBySlugRepository.js";
import { GetCategoryBySlugController } from "./getCategoryBySlug.js";
import { GetCategoryByIdController } from "./getCategoryById.js";
import { GetCategoryByIdRepository } from "../../repositories/categories/getCategoryByIdRepository.js";

const router = Router();

router.get("/", async (req, res) => {
  const getCategoriesRepository = new GetCategoriesRepository();

  const getCategoriesController = new GetCategoriesController(
    getCategoriesRepository
  );

  const { body, statusCode } = await getCategoriesController.handle();

  res.status(statusCode).send(body);
});

router.get("/:slug", async (req, res) => {
  const getCategoryBySlugRepository = new GetCategoryBySlugRepository();

  const getCategoryBySlugController = new GetCategoryBySlugController(
    getCategoryBySlugRepository
  );
  const { body, statusCode } = await getCategoryBySlugController.handle({
    params: { slug: req.params.slug },
  });

  res.status(statusCode).send(body);
});

router.get("/id/:id", async (req, res) => {
  const getCategoryByidRepository = new GetCategoryByIdRepository();

  const getCategoryByIdController = new GetCategoryByIdController(
    getCategoryByidRepository
  );

  const { body, statusCode } = await getCategoryByIdController.handle({
    params: { id: req.params.id },
  });

  res.status(statusCode).send(body);
});

export default router;
