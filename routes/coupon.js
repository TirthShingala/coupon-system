//routes for coupon
const router = require("express").Router();
const {
  addCoupon,
  getAllCoupons,
  getCouponById,
  updateCoupon,
  deleteCoupon,
} = require("../utils/coupon");

router.post("/coupon", addCoupon);
router.get("/coupons", getAllCoupons);
router.get("/coupon/:id", getCouponById);
router.put("/coupon/:id", updateCoupon);
router.delete("/coupon/:id", deleteCoupon);

module.exports = router;
