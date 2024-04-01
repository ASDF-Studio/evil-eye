import axios from "axios";
import { contactConstants } from "./contact.constants";
import { API } from "../../urlConfig";

const baseURL = API;

export const sendContactUsData = (contactData) => {
  return async (dispatch) => {
    dispatch({
      type: contactConstants.CONTACT_US_REQUEST,
      payload: true,
    });
    try {
      const res = await axios.post(`${baseURL}contact`, contactData);
      //   let res = {
      //     status: 200,
      //   };
      //   throw new Error("error from server");
      if (res.status === 200) {
        dispatch({
          type: contactConstants.CONTACT_US_SUCCESS,
          payload: false,
        });
        alert("SUCCESS");
        return;
      }
    } catch (error) {
      //   if (true) {
      //     let message = "yo";
      if (error.response.status === 400) {
        const { message } = error?.response?.data;
        dispatch({
          type: contactConstants.CONTACT_US_FAILURE,
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
