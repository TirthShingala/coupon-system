const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = Schema(
  {
    // Order Amount
    amount: {
      type: Number,
      required: true,
    },
    // Customer OB Form
    paymentfor: {
      type: mongoose.Types.ObjectId,
      ref: "customer",
      required: true,
    },
    // Gateway Name
    gateway: {
      type: String,
      required: true,
    },
    // Todo Check user id to be unique
    // And create a valid user id instead of using uuid
    orderid: {
      type: String,
      required: true,
      unique: true,
    },
    transactionid: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "paid", "not paid"],
      default: "pending",
    },
    message: {
      type: String,
    },
    // Verified Using i.e. URL || Webhook || Auto verification algorithm
    verifiedBy: {
      type: String,
    },
    isTaxAdded: {
      type: Boolean,
      required: true,
      default: false,
    },
    taxAmount: {
      type: Number,
      required: true,
      default: 0,
    },
    isDiscount: {
      type: Boolean,
      default: false,
    },
    discount: {
      type: Number,
      default: 0,
    },
    coupon_used: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Payment = mongoose.model("Payment", paymentSchema);
