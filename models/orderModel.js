import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.ObjectId,
        ref: "Products",
      },
    ],
    payment: {},
    buyer: {
      type: mongoose.ObjectId,
      ref: "users",
    },
    status: {
      type: String,
      default: "Not Processed Yet",
      enum: ["Not Processed Yet", "Processing", "Shipped", "Deliverd", "Cancel"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
