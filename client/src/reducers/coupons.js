import {
  GET_COUPONS,
  POST_ERROR,
  SHOP_ERROR,
  WISH_ERROR,
  COUPON_ERROR,
  UPDATE_SHOP,
  UPDATE_WISH,
  DELETE_COUPON,
  ADD_COUPON
} from "../actions/types";

const initialState = {
  coupons: [],
  coupon: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_COUPONS:
      return {
        ...state,
        posts: payload,
        loading: false
      };
    case GET_COUPONS:
      return {
        ...state,
        coupons: payload,
        loading: false
      };
    case ADD_COUPON:
      return {
        ...state,
        coupon: [payload, ...state.coupons],
        loading: false
      };
    case DELETE_COUPON:
      return {
        ...state,
        coupons: state.coupons.filter(coupon => coupon._id !== payload),
        loading: false
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case SHOP_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case WISH_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case COUPON_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case UPDATE_SHOP:
      return {
        ...state,
        SHOP: state.shop.map(shop =>
          shop._id === payload.id ? { ...shop, shop: payload.shop } : shop
        ),
        loading: false
      };
    case UPDATE_WISH:
      return {
        ...state,
        wish: state.wish.map(wish =>
          wish._id === payload.id ? { ...wish, wish: payload.wish } : wish
        ),
        loading: false
      };
    default:
      return state;
  }
}
