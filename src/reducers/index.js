import { combineReducers } from "redux";
import authReducers from "./auth.reducers";
import contactReducers from "./contact.reducers";
import historyReducer from "./history.reducers";
import prayerReducer from "./prayer.reducers";
import modalReducer from "./modal.reducers";

const rootReducer = combineReducers({
  auth: authReducers,
  contact: contactReducers,
  history: historyReducer,
  prayer: prayerReducer,
  modal: modalReducer,
});

export default rootReducer;
