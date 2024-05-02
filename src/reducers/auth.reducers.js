import { authConstants } from "@/action/constants";

const initState = {
  token: null,
  user: {
    _id: "",
    name: "",
    email: "",
  },
  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  message: "",
  signupRequest: false,
  emailOTPSent: false,
  resetEmail: "",
};

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true,
        loading: true,
        error: null,
      };
      break;
    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticating: false,
        authenticate: true,
        loading: false,
        error: null,
      };
      break;
    case authConstants.LOGIN_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
        authenticate: false,
      };
    case authConstants.LOGIN_AUTH_FAILURE:
      state = {
        ...state,
        // error: action.payload.error,
        loading: false,
        authenticate: false,
      };
      break;
    case authConstants.LOGOUT_REQUEST:
      state = {
        ...state,
        loading: true,
        error: null,
      };
      break;
    case authConstants.LOGOUT_SUCCESS:
      state = {
        ...initState,
        error: null,
        authenticate: false,
      };
      break;
    case authConstants.LOGOUT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;

    case authConstants.SIGNUP_REQUEST:
      state = {
        ...state,
        authenticating: true,
        loading: true,
        signupRequest: false,
        error: null,
        authenticate: false,
      };
      break;
    case authConstants.SIGNUP_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        message: action.payload.message,
        signupRequest: action.payload.signupRequest,
        authenticating: false,
        loading: false,
        error: null,
        authenticate: false,
      };
      break;
    case authConstants.SIGNUP_FAILURE:
      state = {
        ...state,
        error: action.payload.message,
        loading: false,
        signupRequest: false,
        error: null,
        authenticate: false,
      };
      break;

    case authConstants.OTP_REQUEST:
      state = {
        ...state,
        authenticating: true,
        loading: true,
        error: null,
        authenticate: false,
      };
      break;
    case authConstants.OTP_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        message: action.payload.message,
        signupRequest: false,
        authenticating: false,
        loading: false,
        authenticate: true,
        error: null,
      };
      break;
    case authConstants.OTP_FAILURE:
      state = {
        ...state,
        error: action.payload.message,
        loading: false,
        signupRequest: false,
        authenticating: false,
        authenticate: false,
        error: null,
      };
      break;

    case authConstants.UPDATE_REQUEST:
      state = {
        ...state,
        loading: true,
        error: null,
      };
      break;
    case authConstants.UPDATE_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        loading: false,
        error: null,
      };
      break;
    case authConstants.UPDATE_FAILURE:
      state = {
        ...state,
        loading: false,
        error: null,
      };
      break;

    case authConstants.UPDATE_PASSWORD_REQUEST:
      state = {
        ...state,
        loading: true,
        error: null,
      };
      break;

    case authConstants.UPDATE_PASSWORD_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
        error: null,
      };
      break;

    case authConstants.CHANGE_EMAIL_REQUEST:
      state = {
        ...state,
        loading: true,
        emailOTPSent: false,
        error: null,
      };
      break;

    case authConstants.CHANGE_EMAIL_SUCCESS:
      state = {
        ...state,
        loading: false,
        emailOTPSent: action.payload.emailOTPSent,
        error: null,
      };
      break;

    case authConstants.CHANGE_EMAIL_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
        emailOTPSent: false,
        error: null,
      };
      break;

    case authConstants.EMAIL_OTP_REQUEST:
      state = {
        ...state,
        loading: true,
        error: null,
      };
      break;

    case authConstants.EMAIL_OTP_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        loading: false,
        error: null,
      };
      break;

    case authConstants.EMAIL_OTP_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
        error: null,
      };
      break;

    case authConstants.RESET_PASSWORD_REQUEST:
      state = {
        ...state,
        loading: true,
        error: null,
      };
      break;

    case authConstants.RESET_PASSWORD_SUCCESS:
      state = {
        ...state,
        loading: false,
        resetEmail: action.payload.resetEmail,
        error: null,
      };
      break;

    case authConstants.RESET_PASSWORD_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
        error: null,
      };
      break;
  }

  return state;
}
