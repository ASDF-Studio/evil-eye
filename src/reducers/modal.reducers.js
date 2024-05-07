import { modalConstants } from "@/action/constants";

const initialState = {
  loginModal: false,
  guestModal: false,
};
export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case modalConstants.GUEST_SUCCESS:
      state = {
        ...state,
        loginModal: action.payload.loginModal,
        uestModal: false,
      };
      break;

    case modalConstants.GUEST_MODAL_SUCCESS:
      state = {
        ...state,
        guestModal: action.payload.guestModal,
        loginModal: false,
      };
      break;
  }
  return state;
}
