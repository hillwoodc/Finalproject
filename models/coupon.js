const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CouponSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  title: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  cpid: {
    type: String,
    required: true
  },
  expires: {
    type: Date
  },
  image_url: {
    type: String
  },
  shop: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      }
    }
  ],
  wish: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      }
    }
  ]
});

module.exports = Coupon = mongoose.model("coupon", CouponSchema);
