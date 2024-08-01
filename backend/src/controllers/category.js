import { Router } from "express";
import { getCategory } from "../services/category.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const category = await getCategory();
    res.send(category);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
