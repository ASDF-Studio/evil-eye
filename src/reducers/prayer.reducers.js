import { prayerConstants } from "@/action/constants";

const initialState = {
  prayer: [],
  paymentSuccess: false,
  loading: false,
  message: "",
  error: null,
  couponValid: false,
  discountPercentage: "",
  coupon: "",
  invalidCoupon: "",

  paymentStatus: false,
  prayerDone: false,
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
        invalidCoupon: "",
      };
      break;

    case prayerConstants.COUPON_SUCCESS:
      state = {
        ...state,
        loading: false,
        error: null,
        couponValid: action.payload.couponValid,
        coupon: action.payload.couponCode,
        discountPercentage: action.payload.discountPercentage,
        invalidCoupon: "",
      };
      break;

    case prayerConstants.COUPON_FAILURE:
      state = {
        ...state,
        message: action.payload.message,
        error: action.payload.error,
        couponValid: action.payload.couponValid,
        invalidCoupon: action.payload.message,
        loading: false,
      };
      break;

    case prayerConstants.CHECKOUT_REQUEST:
      state = {
        ...state,
        paymentStatus: false,
        prayerDone: false,
      };
      break;

    case prayerConstants.CHECKOUT_SUCCESS:
      state = {
        ...state,
        paymentStatus: action.payload.paymentStatus,
        prayerDone: action.payload.prayerDone,
      };
      break;

    case prayerConstants.CHECKOUT_PRAYER_DONE:
      state = {
        ...state,
        paymentStatus: action.payload.paymentStatus,
        prayerDone: action.payload.prayerDone,
      };
      break;

    case prayerConstants.CHECKOUT_FAILURE:
      state = {
        ...state,
        paymentStatus: action.payload.paymentStatus,
        prayerDone: false,
      };
      break;

    case prayerConstants.RECITE_PRAYER_REQUEST:
      state = {
        ...state,
        prayerDone: false,
        loading: true,
      };
      break;

    case prayerConstants.RECITE_PRAYER_SUCCESS:
      state = {
        ...state,
        loading: false,
        prayerDone: action.payload.prayerDone,
      };
      break;

    case prayerConstants.RECITE_PRAYER_FAILURE:
      state = {
        ...state,
        loading: false,
      };
      break;
  }
  return state;
}
