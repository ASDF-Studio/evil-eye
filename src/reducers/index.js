import { combineReducers } from "redux";
import authReducers from "./auth.reducers";
import contactReducers from "./contact.reducers";
import historyReducer from "./history.reducers";
import prayerReducer from "./prayer.reducers";

const rootReducer = combineReducers({
  auth: authReducers,
  contact: contactReducers,
  history: historyReducer,
  prayer: prayerReducer,
});

export default rootReducer;
