import express from "express";
import { config } from "dotenv";
import getCategory from "./controllers/category.js";
import getProduct from "./controllers/product.js";

const app = express();
const port = 8888;

config();

app.use(express.json());

app.use("/category", getCategory);
app.use("/product", getProduct);

app.listen(port, () => {
  console.log(`Rodando na porta! ${port}`);
});
