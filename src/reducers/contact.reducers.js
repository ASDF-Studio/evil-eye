import { contactConstants } from "@/action/constants";


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
        loading: true,
        error: null,
      };
      break;

    case contactConstants.CONTACT_US_SUCCESS:
      state = {
        ...state,
        loading: false,
        error: null,
      };
      break;

    case contactConstants.CONTACT_US_FAILURE:
      state = {
        ...state,
        loading: false,
        responseMsg: action.payload.message,
        error: action.payload.error,
      };
      break;
  }
  return state;
}
