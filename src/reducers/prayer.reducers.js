import { prayerConstants } from "@/action/constants";

const initialState = {
  prayer: [],
  loading: false,
  message: "",
  error: null,
};
export default function prayerReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case prayerConstants.PRAYER_REQUEST:
      state = {
        ...state,
        loading: true,
        error: null,
      };
      break;

    case prayerConstants.PRAYER_SUCCESS:
      state = {
        ...state,
        prayer: [...action.payload],
        loading: false,
        error: null,
      };
      break;

    case prayerConstants.PRAYER_FAILURE:
      state = {
        ...state,
        message: action.payload.message,
        error: action.payload.error,
        loading: false,
      };
      break;
  }
  return state;
}
