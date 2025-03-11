import { Router } from "express";
import express from "express";
import categories from "../controllers/category/index.js";
import products from "../controllers/product/index.js";
import registerUser from "../controllers/register/index.js";
import userLogin from "../controllers/login/index.js";
import checkout from "../controllers/checkout/index.js";
import payment_success from "../controllers/payment-success/index.js";
import order from "../controllers/order/index.js";
import dashboard from "../controllers/dashboard/index.js";
import { authMiddleware } from "../middleware/authenticate-middleware.js";
import { roleMiddlware } from "../middleware/role-middleware.js";

const router = Router();

router.use("/categories", categories);
router.use("/products", products);
router.use("/auth", registerUser);
router.use("/auth", userLogin);
router.use("/checkout", authMiddleware, checkout);
router.use("/order", order);
router.use(
  "/admin/dashboard",
  authMiddleware,
  roleMiddlware("admin"),
  dashboard
);

router.use(
  "/api/order/payment-success",
  express.raw({ type: "application/json" })
);
router.use("/api/order/payment-success", payment_success);

export default router;
