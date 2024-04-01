import { combineReducers } from "redux";
import authReducers from "./auth.reducers";
import contactReducers from "./contact.reducers";

const rootReducer = combineReducers({
  auth: authReducers,
  contact: contactReducers,
});

export default rootReducer;
