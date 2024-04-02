import { combineReducers } from "redux";
import authReducers from "./auth.reducers";
import contactReducers from "./contact.reducers";
import historyReducer from "./history.reducers";

const rootReducer = combineReducers({
  auth: authReducers,
  contact: contactReducers,
  history: historyReducer,
});

export default rootReducer;
