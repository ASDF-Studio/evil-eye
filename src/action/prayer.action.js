import axios from "axios";
import { API } from "../../urlConfig";
import { prayerConstants } from "./constants";

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
          payload: res.data.prayer,
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
