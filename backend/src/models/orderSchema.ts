import mongoose, { Document } from "mongoose";

export interface IOrder extends Document {
  userId: mongoose.Types.ObjectId;
  orderProducts: mongoose.Types.ObjectId[];
  status: "WAITING_FOR_PAYMENT" | "PAYMENT_CONFIRMED";
}

const OrderSchema = new mongoose.Schema<IOrder>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderProducts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "OrderProduct",
      },
    ],
    status: {
      type: String,
      enum: ["WAITING_FOR_PAYMENT", "PAYMENT_CONFIRMED"],
      default: "WAITING_FOR_PAYMENT",
    },
  },
  { timestamps: true }
);

export const Order =
  mongoose.models.Order || mongoose.model<IOrder>("Order", OrderSchema);
