// import axios from "../helpers/axios";
import axios from "axios";
import { authConstants } from "./constants";
import { API } from "../../urlConfig";

const baseURL = API;

export const login = (user) => {
  return async (dispatch) => {
    console.log("login user ", user);
    try {
      dispatch({ type: authConstants.LOGIN_REQUEST });
      const res = await axios.post(`${baseURL}login`, user);

      if (res.status === 200) {
        localStorage.setItem("evileye-token", res.data.token);
        localStorage.setItem("evileye-user", JSON.stringify(res.data.user));
        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          payload: {
            token: res.data.token,
            user: res.data.user,
          },
        });
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errorMessage = error.response.data.error;
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: { error: errorMessage },
        });
      } else {
        console.error("Error:", error);
      }
    }
  };
};

export const updateUser = (user) => {
  return async (dispatch) => {
    dispatch({ type: authConstants.UPDATE_REQUEST });
    const res = await axios.post(`${baseURL}updateUser`, {
      ...user,
    });

    if (res.status === 201) {
      const { user } = res.data;
      localStorage.setItem("evileye-user", JSON.stringify(user));
      dispatch({
        type: authConstants.UPDATE_SUCCESS,
        payload: { user },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: authConstants.UPDATE_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};

export const updatePassword = (password) => {
  return async (dispatch) => {
    dispatch({ type: authConstants.UPDATE_PASSWORD_REQUEST });
    const res = await axios.post(`${baseURL}updatePassword`, {
      ...password,
    });

    if (res.status === 200) {
      const { message } = res.data;
      dispatch({
        type: authConstants.UPDATE_PASSWORD_SUCCESS,
        payload: { message },
      });
      dispatch(logout());
    } else {
      if (res.status === 400) {
        dispatch({
          type: authConstants.UPDATE_PASSWORD_FAILURE,
          payload: { error: message },
        });
      }
    }
  };
};

export const signup = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: authConstants.SIGNUP_REQUEST });
      const res = await axios.post(`${baseURL}signup`, user);

      if (res.status === 201) {
        const { message, signupRequest, user } = res.data;
        dispatch({
          type: authConstants.SIGNUP_SUCCESS,
          payload: {
            message,
            signupRequest,
            user,
          },
        });
      }

      if (res.status === 202) {
        const errorMessage = res.data.error;
        dispatch({
          type: authConstants.OTP_OPEN,
          payload: {
            otp_open: res.data.otp_open,
            otpEmail: res.data.otpEmail,
            payload: { error: errorMessage },
          },
        });
      }
      if (res.status === 410) {
        const errorMessage = res.data.error;
        dispatch({
          type: authConstants.OTP_CLOSE,
          payload: { otp_open: res.data.otp_open, error: errorMessage },
        });
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errorMessage = error.response.data.error;
        dispatch({
          type: authConstants.SIGNUP_FAILURE,
          payload: { error: errorMessage },
        });
      } else {
        console.error("Error:", error);
      }
    }
  };
};

export const verifyOTP = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: authConstants.OTP_REQUEST });
      const res = await axios.post(`${baseURL}verify`, data);

      if (res.status === 200) {
        localStorage.setItem("evileye-token", res.data.token);
        localStorage.setItem("evileye-user", JSON.stringify(res.data.user));
        dispatch({
          type: authConstants.OTP_SUCCESS,
          payload: {
            token: res.data.token,
            user: res.data.user,
          },
        });
      }
    } catch (error) {
      if (error.response.status === 400) {
        const { message } = error.response.data;
        dispatch({
          type: authConstants.OTP_FAILURE,
          payload: { message },
        });
      }
    }
  };
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("evileye-token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("evileye-user"));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_AUTH_FAILURE,
        payload: { error: "Failed to login" },
      });
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGOUT_REQUEST });
    const res = await axios.post(`${baseURL}logout`);

    if (res.status === 200) {
      localStorage.clear();
      dispatch({ type: authConstants.LOGOUT_SUCCESS });
    } else {
      dispatch({
        type: authConstants.LOGOUT_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const changeEmail = (email) => {
  return async (dispatch) => {
    dispatch({ type: authConstants.CHANGE_EMAIL_REQUEST });
    const res = await axios.post(`${baseURL}changeEmail`, {
      ...email,
    });

    if (res.status === 200) {
      const { message, emailOTPSent } = res.data;
      dispatch({
        type: authConstants.CHANGE_EMAIL_SUCCESS,
        payload: { message, emailOTPSent },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: authConstants.CHANGE_EMAIL_FAILURE,
          payload: { error: message },
        });
      }
    }
  };
};

export const verifyEmailOTP = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: authConstants.OTP_REQUEST });
      const res = await axios.post(`${baseURL}verifyEmailOTP`, data);

      if (res.status === 200) {
        localStorage.setItem("evileye-token", res.data.token);
        localStorage.setItem("evileye-user", JSON.stringify(res.data.user));
        dispatch({
          type: authConstants.OTP_SUCCESS,
          payload: {
            token: res.data.token,
            user: res.data.user,
            message: res.data.message,
          },
        });
      }
    } catch (error) {
      if (error.response.status === 400) {
        const { message } = error.response.data;
        dispatch({
          type: authConstants.OTP_FAILURE,
          payload: { message },
        });
      }
    }
  };
};

export const generateResetPasswordLink = (resetEmail) => {
  return async (dispatch) => {
    dispatch({ type: authConstants.RESET_PASSWORD_REQUEST });
    const res = await axios.post(`${baseURL}generateResetPasswordLink`, {
      ...resetEmail,
    });

    if (res.status === 200) {
      const { message } = res.data;
      dispatch({
        type: authConstants.RESET_PASSWORD_SUCCESS,
        payload: { message, resetEmail: resetEmail.email },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: authConstants.RESET_PASSWORD_FAILURE,
          payload: { error: message },
        });
      }
    }
  };
};
