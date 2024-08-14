import { Router } from "express";
import {
  getCategory,
  getCategoryById,
  getCategoryBySlug,
} from "../services/category.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const category = await getCategory();
    res.send(category);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:categorySlug", async (req, res) => {
  try {
    const categoryBySlug = await getCategoryBySlug(req.params.categorySlug);
    res.send(categoryBySlug);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/id/:categoryId", async (req, res) => {
  try {
    const categoryById = await getCategoryById(req.params.categoryId);
    res.send(categoryById);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
