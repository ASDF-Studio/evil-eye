// import axios from "axios";
import axiosInstance from "../helpers/axios";
import { API } from "../../urlConfig";
import { historyConstants } from "./constants";

const baseURL = API;

export const getHistoryData = (data) => {
  return async (dispatch) => {
    dispatch({
      type: historyConstants.HISTORY_REQUEST,
    });

    try {
      const res = await axiosInstance.post(`${baseURL}history`, {
        ...data,
      });
      if (res.status === 200) {
        dispatch({
          type: historyConstants.HISTORY_SUCCESS,
          payload: res.data.history,
        });
        return;
      }
    } catch (error) {
      if (error?.response?.status === 400) {
        const { message } = error?.response?.data;
        dispatch({
          type: historyConstants.HISTORY_FAILURE,
          payload: {
            message: message || "Something went wrong. Please try again.",
            error: error,
          },
        });
        alert("failed");
        return;
      }
    }
  };
};
