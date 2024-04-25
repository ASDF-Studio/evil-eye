import { contactConstants } from "@/action/constants";


const initialState = {
  loading: false,
  error: null,
  responseMsg: "",
  contactSend: false
};
export default function contactReducers(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case contactConstants.CONTACT_US_REQUEST:
      state = {
        ...state,
        loading: true,
        contactSend: false,
        error: null,
      };
      break;

    case contactConstants.CONTACT_US_SUCCESS:
      state = {
        ...state,
        loading: false,
        contactSend: action.payload.contactSend,
        error: null,
      };
      break;

    case contactConstants.CONTACT_US_FAILURE:
      state = {
        ...state,
        loading: false,
        contactSend: false,
        responseMsg: action.payload.message,
        error: action.payload.error,
      };
      break;
  }
  return state;
}
