import { combineReducers } from "redux";

// import all reducers
import { testReducer } from "./test/reducers";

// COMBINED REDUCERS
const reducers = {
  test: testReducer,
};

export default combineReducers(reducers);
