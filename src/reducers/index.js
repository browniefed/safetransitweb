import { combineReducers } from "redux";
import vehicles from "./vehicles";
import reports from "./reports";

const rootReducer = combineReducers({
  vehicles,
  reports,
});

export default rootReducer;
