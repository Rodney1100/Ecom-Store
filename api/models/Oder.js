const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    UserId: { type: String, required: true, unique: true },
    products: [
      {
        product: { type: String },
        quantity: { type: Number, default: 1 },
      },
    ],
    amount: { type: Number, require: true },
    address: { type: Object, require: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
