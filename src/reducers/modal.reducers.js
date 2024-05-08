import { modalConstants } from "@/action/constants";

const initialState = {
  loginModal: false,
  guestModal: false,
  userModal: false,

  privacyModal: false,
};
export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case modalConstants.GUEST_SUCCESS:
      state = {
        ...state,
        loginModal: action.payload.loginModal,
        guestModal: false,
        userModal: false,
      };
      break;

    case modalConstants.GUEST_MODAL_SUCCESS:
      state = {
        ...state,
        guestModal: action.payload.guestModal,
        loginModal: false,
        userModal: false,
      };
      break;

    case modalConstants.USER_RECITE_SUCCESS:
      state = {
        ...state,
        userModal: action.payload.userModal,
        loginModal: false,
        guestModal: false,
      };
      break;

    case modalConstants.PRIVACY_MODAL_SUCCESS:
      state = {
        ...state,
        privacyModal: action.payload.privacyModal,
      };
      break;
  }
  return state;
}
