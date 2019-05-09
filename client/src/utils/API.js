import axios from "axios";

export default {
  // Gets all coupons
  getCoupons: function() {
    return axios.get("/api/coupons");
  },
  // Saves temporary list of coupons to the database
  saveTemp: function(tempData) {
    return axios.post("/api/coupons", tempData);
  },
  // Gets a coupon with the given id
  getCoupon: function(id) {
    return axios.get("/api/coupons/" + id);
  },
  // Deletes a coupon with the given id
  deleteCoupon: function(id) {
    return axios.delete("/api/coupons/" + id);
  },
  // Deletes all shopping coupons
  deleteShoppingCoupons: function() {
    return axios.delete("/api/shoppinglist");
  },
  // Deletes all wish coupons
  deleteWishCoupons: function() {
    return axios.delete("/api/wishlist");
  },
  // Saves shopping coupons to the database
  saveBuy: function(shoppingData) {
    return axios.post("/api/shoppinglist", shoppingData);
  },
  // Saves wish coupons to the database
  saveWish: function(wishData) {
    return axios.post("/api/wishlist", wishData);
  }
};
