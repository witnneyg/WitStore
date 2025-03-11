import express from "express";
import cors from "cors";
import path from "path";
import router from "./routes/index.js";
import { corsOptions } from "./config/corsConfig.js";

const app = express();

app.use(cors(corsOptions));

app.use((req, res, next) => {
  if (req.originalUrl === "/api/order/payment-success") {
    next();
  } else {
    express.json()(req, res, next);
  }
});

app.use(router);
app.use("/uploads", express.static(path.resolve("uploads")));

export default app;
