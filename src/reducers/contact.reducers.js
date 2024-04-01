import { contactConstants } from "@/action/contact.constants";

const initialState = {
  user: {
    userName: "joy",
    userEmail: "ss@gmail.com",
    phoneNumber: "01942189093",
    message: "yoyo popsssss",
  },
  contactUsEmail: "info@evileyeremedy.com",
  loading: false,
  error: null,
  responseMsg: "",
};
export default function contactReducers(state = initialState, action) {
  switch (action.type) {
    case contactConstants.INPUT_USER_NAME:
      state = {
        ...state,
        user: {
          ...state.user,
          userName: action.payload,
        },
      };
      break;

    case contactConstants.INPUT_USER_EMAIL:
      state = {
        ...state,
        user: {
          ...state.user,
          userEmail: action.payload,
        },
      };
      break;

    case contactConstants.INPUT_PHONE_NUMBER:
      state = {
        ...state,
        user: {
          ...state.user,
          phoneNumber: action.payload,
        },
      };
      break;

    case contactConstants.INPUT_MESSAGE:
      state = {
        ...state,
        user: {
          ...state.user,
          message: action.payload,
        },
      };
      break;
    case contactConstants.CONTACT_US_REQUEST:
      state = {
        ...state,
        user: {
          ...state.user,
        },
        loading: action.payload,
      };
      break;

    case contactConstants.CONTACT_US_SUCCESS:
      state = {
        ...state,
        user: {
          ...state.user,
        },
        loading: action.payload,
      };
      break;

    case contactConstants.CONTACT_US_FAILURE:
      state = {
        ...state,
        user: {
          ...state.user,
        },
        loading: false,
        responseMsg: action.payload.message,
        error: action.payload.error,
      };
      break;
  }
  return state;
}
