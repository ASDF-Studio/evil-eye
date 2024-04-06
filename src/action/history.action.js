import axios from "axios";
import { API } from "../../urlConfig";
import { historyConstants } from "./history.constants";

const baseURL = API;

export const getHistoryData = (userId) => {
  return async (dispatch) => {
    dispatch({
      type: historyConstants.HISTORY_REQUEST,
    });

    try {
      const res = await axios.get(`${baseURL}history/${userId}`);
      // const res = await axios.get(`http://localhost:4000/api`);
      if (res.status === 200) {
        dispatch({
          type: historyConstants.HISTORY_SUCCESS,
          payload: res.data.history,
        });
        alert("SUCCESS");
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
