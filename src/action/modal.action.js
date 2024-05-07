import { modalConstants } from "./constants";

export const guest = (showLoginModal) => {
  return async (dispatch) => {
    dispatch({
      type: modalConstants.GUEST_SUCCESS,
      payload: { loginModal: showLoginModal },
    });
  };
};

export const guestFromLogin = (showGuestModal) => {
  return async (dispatch) => {
    dispatch({
      type: modalConstants.GUEST_MODAL_SUCCESS,
      payload: { guestModal: showGuestModal },
    });
  };
};
