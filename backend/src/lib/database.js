import mongoose from "mongoose";

export async function databaseConnection() {
  if (!global.mongoose) {
    try {
      global.mongoose = await mongoose.connect(process.env.MONGODB_URL);
      console.log("conectou ao mongodb");
    } catch (error) {
      console.error("erro ao contecar ao MongoDB", error);
    }
  }
}
