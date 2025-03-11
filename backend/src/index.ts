import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { MongoClient } from "./database/mongo.js";
import { corsOptions } from "./config/corsConfig.js";
import routes from "./routes/index.js";

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

  app.use(routes);

  app.listen(port, () => {
    console.log(`Rodando na porta ${port}!`);
  });
};

main();
