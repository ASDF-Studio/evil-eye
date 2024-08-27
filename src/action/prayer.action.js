import axios from "axios";
import { API } from "../../urlConfig";
import { prayerConstants } from "./constants";
import { loadStripe } from "@stripe/stripe-js";

const baseURL = API;
const stripePublishKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY;
const stripe = await loadStripe(stripePublishKey);

export const prayer = (data) => {
  return async (dispatch) => {
    dispatch({
      type: prayerConstants.PRAYER_REQUEST,
    });

    try {
      const res = await axios.post(`${baseURL}prayer`, {
        ...data,
      });
      if (res.status === 201) {
        dispatch({
          type: prayerConstants.PRAYER_SUCCESS,
          payload: {
            prayer: res.data.prayer,
          },
        });

        const prayerData = {
          ...data,
          prayerId: res.data.prayer.prayerId,
        };

        await dispatch(paymentCheckout(prayerData));
        return;
      }
    } catch (error) {
      if (error?.response?.status === 400) {
        const { message } = error?.response?.data;
        dispatch({
          type: prayerConstants.PRAYER_FAILURE,
          payload: {
            message: message || "Something went wrong. Please try again.",
            error: error,
          },
        });
        return;
      }
    }
  };
};

export const validateCoupon = (couponCode) => {
  return async (dispatch) => {
    dispatch({
      type: prayerConstants.COUPON_REQUEST,
    });

    try {
      const res = await axios.post(`${baseURL}validateCoupon`, {
        ...couponCode,
      });
      if (res.data.valid) {
        dispatch({
          type: prayerConstants.COUPON_SUCCESS,
          payload: {
            couponValid: res.data.valid,
            couponCode: res.data.coupon,
            discountPercentage: res.data.discountPercentage,
          },
        });
      } else {
        dispatch({
          type: prayerConstants.COUPON_FAILURE,
          payload: {
            message: "Invalid coupon code",
            couponValid: res.data.valid,
          },
        });
        return;
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const { message } = error.response.data;
        dispatch({
          type: prayerConstants.COUPON_FAILURE,
          payload: {
            message: message || "Something went wrong. Please try again.",
            error: error,
          },
        });
      } else {
        console.error("Error during payment:", error);
      }
    }
  };
};

export const paymentCheckout = (data) => {
  return async (dispatch) => {
    dispatch({
      type: prayerConstants.PAYMENT_REQUEST,
    });

    try {
      const res = await axios.post(`${baseURL}paymentCheckout`, {
        ...data,
      });
      if (res.data.success) {
        dispatch({
          type: prayerConstants.PAYMENT_SUCCESS,
          payload: {
            paymentSuccess: res.data.success,
            finalAmount: res.data.finalAmount,
          },
        });

        const session = res.data;

        const result = await stripe.redirectToCheckout({
          sessionId: session.sessionId,
        });

        if (result.error) {
          dispatch({
            type: prayerConstants.PAYMENT_FAILURE,
            payload: {
              message: "Something went wrong. Please try again.",
              error: result.error,
            },
          });
        }
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const { message } = error.response.data;
        dispatch({
          type: prayerConstants.PAYMENT_FAILURE,
          payload: {
            message: message || "Something went wrong. Please try again.",
            error: error,
          },
        });
      } else {
        console.error("Error during payment:", error);
      }
    }
  };
};

export const verifyCheckoutSession = (data) => {
  return async (dispatch) => {
    dispatch({
      type: prayerConstants.CHECKOUT_REQUEST,
    });

    try {
      const res = await axios.post(`${baseURL}verifyCheckoutSession`, data);
      if (res.status === 200) {
        dispatch({
          type: prayerConstants.CHECKOUT_SUCCESS,
          payload: {
            prayerDone: res.data.prayerDone,
            paymentStatus: res.data.paymentStatus,
          },
        });
        return true; // Indicate successful payment and verification
      }
      if (res.status === 202) {
        dispatch({
          type: prayerConstants.CHECKOUT_PRAYER_DONE,
          payload: {
            prayerDone: res.data.prayerDone,
            paymentStatus: res.data.paymentStatus,
          },
        });
        return false; // Indicate successful checkout but prayer already done
      }
    } catch (error) {
      if (error?.response?.status === 400 || error?.response?.status === 404) {
        dispatch({
          type: prayerConstants.CHECKOUT_FAILURE,
          payload: {
            prayerDone: false,
            paymentStatus: false,
          },
        });
        return false; // Indicate failure
      }
      console.error("Unexpected error:", error); // Log unexpected errors
      return false; // Return false for unexpected errors
    }
  };
};


export const recitePrayer = (data) => {
  return async (dispatch) => {
    dispatch({
      type: prayerConstants.RECITE_PRAYER_REQUEST,
    });

    try {
      const res = await axios.post(`${baseURL}recitePrayer`, {
        ...data,
      });
      if (res.status === 200) {
        dispatch({
          type: prayerConstants.RECITE_PRAYER_SUCCESS,
          payload: {
            prayerStart: res.data.prayerStart,
            prayerDone: res.data.prayerDone,
          },
        });
        return;
      }
    } catch (error) {
      if (error?.response?.status === 404) {
        dispatch({
          type: prayerConstants.RECITE_PRAYER_FAILURE,
        });
        return;
      }
    }
  };
};
