import axios from "axios";
import { API } from "../../urlConfig";
import { prayerConstants } from "./constants";
import { loadStripe } from "@stripe/stripe-js";

const baseURL = API;

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

const stripe = await loadStripe(
  "pk_test_51P8SrgIPSjEjFpyba3Mi0h9ESh305TgDxSwFLGf8heoNrP1kIxIqt9r3t2SNQicYkbu14ECUiaq2CqZUvCljvEaK00bM0qsOG5"
);

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
            couponCode: res.data.coupon,
            discountPercentage: res.data.discountPercentage,
          },
        });
      } else {
        console.error("Invalid coupon code");
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

        await dispatch(prayer(data));

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
