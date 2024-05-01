import { prayerConstants } from "@/action/constants";

const initialState = {
  prayer: [],
  paymentSuccess: false,
  loading: false,
  message: "",
  error: null,
  couponValid: false,
  discountPercentage: "",
  coupon:""
};
export default function prayerReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case prayerConstants.PRAYER_REQUEST:
      state = {
        ...state,
        loading: true,
        paymentSuccess: false,
        error: null,
      };
      break;

    case prayerConstants.PRAYER_SUCCESS:
      state = {
        ...state,
        prayer: action.payload.prayer,
        paymentSuccess: action.payload.paymentSuccess,
        loading: false,
        error: null,
      };
      break;

    case prayerConstants.PRAYER_FAILURE:
      state = {
        ...state,
        message: action.payload.message,
        error: action.payload.error,
        paymentSuccess: false,
        loading: false,
      };
      break;

    case prayerConstants.COUPON_REQUEST:
      state = {
        ...state,
        loading: true,
        error: null,
        couponValid: false,
      };
      break;

    case prayerConstants.COUPON_SUCCESS:
      state = {
        ...state,
        loading: false,
        couponValid: true,
        error: null,
        coupon: action.payload.couponCode,
        discountPercentage: action.payload.discountPercentage,
      };
      break;

    case prayerConstants.COUPON_FAILURE:
      state = {
        ...state,
        message: action.payload.message,
        error: action.payload.error,
        couponValid: false,
        loading: false,
      };
      break;
  }
  return state;
}
