const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const auth = require("../../middleware/auth");

const Post = require("../../models/Coupon");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

// @route    POST api/coupons
// @desc     Create a coupon in database
// @access   Private
router.coupon(
  "/",
  [
    auth,
    [
      check("text", "Text is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");

      const newCoupon = new Coupon({
        description: req.body.description,
        title: req.body.title,
        cpid: req.body.cpid,
        image: req.body.image,
        name: user.name,
        user: req.user.id
      });

      const coupon = await newCoupon.save();

      res.json(coupon);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    GET api/coupons
// @desc     Get all coupons from database
// @access   Private
router.get("/", auth, async (req, res) => {
  try {
    const coupons = await Coupon.find().sort({ date: -1 });
    res.json(coupons);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/coupons/:id
// @desc     Get coupon by ID
// @access   Private
router.get("/:cpid", auth, async (req, res) => {
  try {
    const coupon = await Coupon.findById(req.params.cpid);

    if (!coupon) {
      return res.status(404).json({ msg: "Coupon not found" });
    }

    res.json(coupon);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Coupon not found" });
    }
    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/coupons/:cpid
// @desc     Delete a coupon
// @access   Private
router.delete("/:cpid", auth, async (req, res) => {
  try {
    const coupon = await Coupon.findById(req.params.cpid);

    if (!coupon) {
      return res.status(404).json({ msg: "Coupon not found" });
    }

    // Check user
    if (coupon.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    await coupon.remove();

    res.json({ msg: "coupon removed" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Coupon not found" });
    }
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/coupons/shop/:id
// @desc     Shop a coupon
// @access   Private
router.put("/shop/:cpid", auth, async (req, res) => {
  try {
    const coupon = await Coupon.findById(req.params.cpid);

    // Check if the post has already been liked
    if (
      coupon.shop.filter(shop => shop.user.toString() === req.user.id).length >
      0
    ) {
      return res.status(400).json({ msg: "Coupon already shopped" });
    }

    coupon.shop.unshift({ user: req.user.id });

    await coupon.save();

    res.json(coupon.shop);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/posts/unlike/:id
// @desc     Like a post
// @access   Private
router.put("/unshop/:cpid", auth, async (req, res) => {
  try {
    const coupon = await Post.findById(req.params.cpid);

    // Check if the post has already been liked
    if (
      coupon.shop.filter(shop => shop.user.toString() === req.user.id)
        .length === 0
    ) {
      return res.status(400).json({ msg: "Coupon has not yet been shopped" });
    }

    // Get remove index
    const removeIndex = coupon.shop
      .map(shop => shop.user.toString())
      .indexOf(req.user.id);

    coupon.shop.splice(removeIndex, 1);

    await coupon.save();

    res.json(coupon.shop);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/coupons/wish/:id
// @desc     Wish a coupon
// @access   Private
router.put("/wish/:cpid", auth, async (req, res) => {
  try {
    const coupon = await Coupon.findById(req.params.cpid);

    // Check if the coupn has already been wished
    if (
      coupon.wish.filter(wish => wish.user.toString() === req.user.id).length >
      0
    ) {
      return res.status(400).json({ msg: "Coupon already wished" });
    }

    coupon.wish.unshift({ user: req.user.id });

    await coupon.save();

    res.json(coupon.wish);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/posts/unlike/:id
// @desc     Like a post
// @access   Private
router.put("/unwish/:cpid", auth, async (req, res) => {
  try {
    const coupon = await Post.findById(req.params.cpid);

    // Check if the post has already been liked
    if (
      coupon.wish.filter(wish => wish.user.toString() === req.user.id)
        .length === 0
    ) {
      return res.status(400).json({ msg: "Coupon has not yet been wished" });
    }

    // Get remove index
    const removeIndex = coupon.wish
      .map(wish => wish.user.toString())
      .indexOf(req.user.id);

    coupon.wish.splice(removeIndex, 1);

    await coupon.save();

    res.json(coupon.wish);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
