import mongoose, { Connection } from "mongoose";

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
        "Banco de dados não conectado. Chame `connect()` primeiro."
      );
    }
    return this.connection;
  }
}

export const MongoClient = Database.getInstance();

// export const MongoClient = {
//   async connect() {
//     if (!global.mongoose) {
//       try {
//         global.mongoose = await mongoose.connect(process.env.MONGODB_URL);
//         console.log("conectou ao mongodb");
//       } catch (error) {
//         console.error("erro ao contecar ao MongoDB", error);
//       }
//     }
//   },
// };

// export async function databaseConnection() {
//   if (!global.mongoose) {
//     try {
//       global.mongoose = await mongoose.connect(process.env.MONGODB_URL);
//       console.log("conectou ao mongodb");
//     } catch (error) {
//       console.error("erro ao contecar ao MongoDB", error);
//     }
//   }
// }

//singleton qualquer camada pd chamar o mongoClient e a instancia vai ser sempre a msm para todas as chamadas
