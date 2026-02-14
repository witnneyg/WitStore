import mongoose, { Connection } from "mongoose";
import { seed } from "../models/seed.js";

class Database {
  private static instance: Database;
  private connection!: Connection;

  private constructor() {}

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public async connect(): Promise<void> {
    if (!this.connection) {
      try {
        await mongoose.connect(process.env.MONGODB_URL!);
        // await seed();
        this.connection = mongoose.connection;
        console.log("Conectado ao MongoDB");
      } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error);
        throw error;
      }
    }
  }

  public getConnection(): Connection {
    if (!this.connection) {
      throw new Error(
        "Banco de dados não conectado. Chame `connect()` primeiro.",
      );
    }
    return this.connection;
  }
}

export const MongoClient = Database.getInstance();
