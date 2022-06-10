const Coupon = require("../models/coupon");
const vovoucher_code = require("voucher-code-generator");

const addCoupon = async (req, res) => {
  try {
    const {
      code,
      discount,
      maxDiscount,
      minAmount,
      maxUsage,
      expiryDate,
      isActive,
    } = req.body;

    if (!code) {
      code = vovoucher_code.generate({
        length: 6,
        count: 1,
        charset: "alphanumeric",
      });
    }

    const coupon = new Coupon({
      code,
      discount,
      maxDiscount,
      minAmount,
      maxUsage,
      expiryDate,
      isActive,
    });
    const result = await Coupon.create(coupon);
    res.status(200).json({
      message: "Coupon added successfully",
      result,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

const getAllCoupons = async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.status(200).json({
      message: "All coupons fetched successfully",
      coupons,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
const getCouponById = async (req, res) => {
  try {
    const coupon = await Coupon.findById(req.params.id);
    res.status(200).json({
      message: "Coupon fetched successfully",
      coupon,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
const updateCoupon = async (req, res) => {
  try {
    const {
      code,
      discount,
      maxDiscount,
      minAmount,
      maxUsage,
      expiryDate,
      isActive,
    } = req.body;
    const coupon = await Coupon.findByIdAndUpdate(
      req.params.id,
      {
        code,
        discount,
        maxDiscount,
        minAmount,
        maxUsage,
        expiryDate,
        isActive,
      },
      { new: true }
    );
    res.status(200).json({
      message: "Coupon updated successfully",
      coupon,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
const deleteCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Coupon deleted successfully",
      coupon,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
module.exports = {
  addCoupon,
  getAllCoupons,
  getCouponById,
  updateCoupon,
  deleteCoupon,
};
