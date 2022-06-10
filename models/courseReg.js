//course registered schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseRegSchema = new Schema(
  {
    course: {
      type: mongoose.Types.ObjectId,
      ref: "course",
      required: true,
    },
    customer: {
      type: mongoose.Types.ObjectId,
      ref: "customer",
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "completed", "cancelled"],
      default: "pending",
    },
    paymentId: {
      type: mongoose.Types.ObjectId,
      ref: "payment",
      required: true,
    },
    couponId: {
      type: mongoose.Types.ObjectId,
      ref: "coupon",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("courseReg", courseRegSchema);
