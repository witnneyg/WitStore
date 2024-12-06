import mongoose from "mongoose";
import bcrypt from "bcrypt";

const saltRounds = 10;

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  try {
    const hash = await bcrypt.hash(this.password, saltRounds);

    this.password = hash;
    next();
  } catch (error) {
    next(error);
  }
});

export const User = mongoose.models.User || mongoose.model("User", UserSchema);

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  imageUrl: { type: String },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

export const Category =
  mongoose.models.Category || mongoose.model("Category", CategorySchema);

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  description: { type: String },
  basePrice: { type: mongoose.Types.Decimal128 },
  imageUrls: [String],
  categoryId: { type: String, required: true },
  discountPercentage: { type: Number, default: 0 },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

ProductSchema.methods.toJSON = function () {
  const product = this.toObject();
  try {
    if (product.basePrice) {
      product.basePrice = parseFloat(product.basePrice.toString());
    }
  } catch (error) {
    console.error(error);
  }
  return product;
};

export const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

const OrderStatus = {
  WAITING_FOR_PAYMENT: "waiting_for_payment",
  PAYMENT_CONFIRMED: "payment_confirmed",
};

const OrderSchema = new mongoose.Schema(
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
      enum: Object.values(OrderStatus),
      default: OrderStatus.WAITING_FOR_PAYMENT,
    },
  },
  { timestamps: true }
);

export const Order =
  mongoose.models.Order || mongoose.model("Order", OrderSchema);

const OrderProductSchema = new mongoose.Schema(
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

export const OrderProduct =
  mongoose.models.OrderProduct ||
  mongoose.model("OrderProduct", OrderProductSchema);
