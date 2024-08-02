import express from "express";
import cors from "cors";
import { config } from "dotenv";
import getCategory from "./controllers/category.js";
import getProduct from "./controllers/product.js";

const app = express();
const port = 8888;

config();

app.use(cors());
app.use(express.json());

app.use("/categories", getCategory);
app.use("/products", getProduct);

app.listen(port, () => {
  console.log(`Rodando na porta! ${port}`);
});
