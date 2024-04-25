import axios from "axios";
import { API } from "../../urlConfig";
import { contactConstants } from "./constants";

const baseURL = API;

export const sendContactUsData = (contactData) => {
  return async (dispatch) => {
    dispatch({ type: contactConstants.CONTACT_US_REQUEST });
    const res = await axios.post(`${baseURL}contact`, {
      ...contactData,
    });

    if (res.status === 200) {
      const { message } = res.data;
      dispatch({
        type: contactConstants.CONTACT_US_SUCCESS,
        payload: { message, contactSend: true },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: contactConstants.CONTACT_US_FAILURE,
          payload: { error: message },
        });
      }
    }
  };
};
