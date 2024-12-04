import express from "express";
import cors from "cors";
import { config } from "dotenv";
import getCategory from "./controllers/category.js";
import getProduct from "./controllers/product.js";
import registerUser from "./controllers/register-controller.js";
import loginUser from "./controllers/login-controller.js";
import checkout from "./controllers/checkout-controller.js";
import { authMiddleware } from "./middleware/authenticate-middleware.js";
import payment_success from "./controllers/order-payment-success.js";

config();

const app = express();
const port = 8888;

app.use(cors());

app.use((req, res, next) => {
  if (req.originalUrl === "/api/order/payment-success") {
    next();
  } else {
    express.json()(req, res, next);
  }
});

app.use("/categories", getCategory);
app.use("/products", getProduct);
app.use("/auth", registerUser);
app.use("/auth", loginUser);
app.use("/checkout", authMiddleware, checkout);

app.use(
  "/api/order/payment-success",
  express.raw({ type: "application/json" })
);
app.use("/api/order/payment-success", payment_success);

app.listen(port, () => {
  console.log(`Rodando na porta ${port}!`);
});
