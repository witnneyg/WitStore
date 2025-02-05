import express from "express";
import cors from "cors";
import { config } from "dotenv";
import categories from "./controllers/category/index.js";
import products from "./controllers/product/index.js";
import registerUser from "./controllers/register/index.js";
import userLogin from "./controllers/login/index.js";
import checkout from "./controllers/checkout-controller.js";
import { authMiddleware } from "./middleware/authenticate-middleware.js";
import payment_success from "./controllers/order-payment-success.js";
import order from "./controllers/order-controller.js";
import dashboard from "./controllers/dashboard.js";
import { roleMiddlware } from "./middleware/role-middleware.js";
import path from "path";
import { MongoClient } from "./database/mongo.js";

const corsOptions = {
  origin: "*",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type, Authorization",
};

const main = async () => {
  config();

  const app = express();

  const port = process.env.PORT || 8888;

  try {
    await MongoClient.connect();
  } catch (error) {
    console.error(
      "Erro ao conectar ao banco de dados. Encerrando aplicação..."
    );
    process.exit(1);
  }

  app.use(cors(corsOptions));

  app.use((req, res, next) => {
    if (req.originalUrl === "/api/order/payment-success") {
      next();
    } else {
      express.json()(req, res, next);
    }
  });
  app.use("/categories", categories);
  app.use("/products", products);
  app.use("/auth", registerUser);
  app.use("/auth", userLogin);
  app.use("/checkout", authMiddleware, checkout);
  app.use("/order", order);
  app.use(
    "/admin/dashboard",
    authMiddleware,
    roleMiddlware("admin"),
    dashboard
  );
  app.use("/uploads", express.static(path.resolve("uploads")));

  app.use(
    "/api/order/payment-success",
    express.raw({ type: "application/json" })
  );
  app.use("/api/order/payment-success", payment_success);

  app.listen(port, () => {
    console.log(`Rodando na porta ${port}!`);
  });
};

main();
