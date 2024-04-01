import { contactConstants } from "@/action/contact.constants";

const initialState = {
  loading: false,
  error: null,
  responseMsg: "",
};
export default function contactReducers(state = initialState, action) {
  switch (action.type) {
    case contactConstants.CONTACT_US_REQUEST:
      state = {
        ...state,
        user: {
          ...state.user,
        },
        loading: true,
      };
      break;

    case contactConstants.CONTACT_US_SUCCESS:
      state = {
        ...state,
        user: {
          ...state.user,
        },
        loading: false,
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
