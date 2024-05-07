import { modalConstants } from "./constants";

export const guest = (showLoginModal) => {
  return async (dispatch) => {
    dispatch({
      type: modalConstants.GUEST_SUCCESS,
      payload: { loginModal: showLoginModal },
    });
  };
};

export const userRecite = (showReciteModal) => {
  return async (dispatch) => {
    dispatch({
      type: modalConstants.USER_RECITE_SUCCESS,
      payload: { userModal: showReciteModal },
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
