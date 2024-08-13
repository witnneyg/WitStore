import express from "express";
import cors from "cors";
import { config } from "dotenv";
import getCategory from "./controllers/category.js";
import getProduct from "./controllers/product.js";
import registerUser from "./controllers/register-controller.js";
import loginUser from "./controllers/login-controller.js";
import { authMiddleware } from "./middleware/authenticate-middleware.js";

const app = express();
const port = 8888;

config();

app.use(cors());
app.use(express.json());

app.use("/categories", getCategory);
app.use("/products", getProduct);
app.use("/auth", registerUser);
app.use("/auth", loginUser);

app.listen(port, () => {
  console.log(`Rodando na porta! ${port}`);
});
