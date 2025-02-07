import mongoose, { Document } from "mongoose";

export interface IOrderProduct extends Document {
  productId: mongoose.Types.ObjectId;
  orderId: mongoose.Types.ObjectId;
  basePrice: mongoose.Types.Decimal128;
  discountPercentage: number;
  quantity: number;
}

const OrderProductSchema = new mongoose.Schema<IOrderProduct>(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
    basePrice: {
      type: mongoose.Types.Decimal128,
      required: true,
    },
    discountPercentage: {
      type: Number,
      default: 0,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

OrderProductSchema.methods.toJSON = function () {
  const orderProduct = this.toObject();
  try {
    if (orderProduct.basePrice) {
      orderProduct.basePrice = parseFloat(orderProduct.basePrice.toString());
    }
  } catch (error) {
    console.error(error);
  }
  return orderProduct;
};

export const OrderProduct =
  mongoose.models.OrderProduct ||
  mongoose.model<IOrderProduct>("OrderProduct", OrderProductSchema);
