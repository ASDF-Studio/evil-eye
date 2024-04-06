import { historyConstants } from "@/action/history.constants";

const initialState = {
  history: [],
  loading: false,
  respMsg: "",
  error: null,
};
export default function historyReducer(state = initialState, action) {
  switch (action.type) {
    case historyConstants.HISTORY_REQUEST:
      state = {
        ...state,
        history: [...state.history],
        loading: true,
        error: null,
      };
      break;

    case historyConstants.HISTORY_SUCCESS:
      state = {
        ...state,
        history: [...action.payload],
        loading: false,
        error: null,
      };
      break;

    case historyConstants.HISTORY_FAILURE:
      state = {
        ...state,
        history: [...state.history],
        respMsg: action.payload.message,
        error: action.payload.error,
        loading: false,
      };
      break;
  }
  return state;
}
