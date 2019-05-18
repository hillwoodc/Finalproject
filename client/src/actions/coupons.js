import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_COUPONS,
  POST_ERROR,
  SHOP_ERROR,
  WISH_ERROR,
  COUPON_ERROR,
  UPDATE_SHOP,
  UPDATE_WISH,
  DELETE_COUPON,
  ADD_COUPONS
} from "./types";

// Get coupons
export const getCoupons = () => async dispatch => {
  try {
    const res = await axios.get("/api/coupons");

    dispatch({
      type: GET_COUPONS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: COUPON_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add shop/wish
export const addShop = cpid => async dispatch => {
  try {
    const res = await axios.put(`/api/coupons/shop/${cpid}`);

    dispatch({
      type: UPDATE_SHOP,
      payload: { cpid, shop: res.data }
    });
  } catch (err) {
    dispatch({
      type: SHOP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const addWish = cpid => async dispatch => {
  try {
    const res = await axios.put(`/api/coupons/wish/${cpid}`);

    dispatch({
      type: UPDATE_WISH,
      payload: { cpid, wish: res.data }
    });
  } catch (err) {
    dispatch({
      type: WISH_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Remove shop/wish
export const removeShop = cpid => async dispatch => {
  try {
    const res = await axios.put(`/api/coupons/unshop/${cpid}`);

    dispatch({
      type: UPDATE_SHOP,
      payload: { cpid, shop: res.data }
    });
  } catch (err) {
    dispatch({
      type: SHOP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const removeWish = cpid => async dispatch => {
  try {
    const res = await axios.put(`/api/coupons/unwish/${cpid}`);

    dispatch({
      type: UPDATE_WISH,
      payload: { cpid, wish: res.data }
    });
  } catch (err) {
    dispatch({
      type: WISH_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete coupon
export const deleteCoupon = cpid => async dispatch => {
  try {
    await axios.delete(`/api/coupons/${cpid}`);

    dispatch({
      type: DELETE_COUPON,
      payload: cpid
    });

    dispatch(setAlert("Coupon Removed", "success"));
  } catch (err) {
    dispatch({
      type: COUPON_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add coupon

export const addCoupons = formData => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.coupons("/api/coupons", formData, config);

    dispatch({
      type: ADD_COUPONS,
      payload: res.data
    });

    dispatch(setAlert("Coupons Created", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
