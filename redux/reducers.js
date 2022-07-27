import { combineReducers } from "redux";

// import all reducers
import { testReducer } from "./test/reducers";
import { modalReducer } from "./modal/reducers";
// COMBINED REDUCERS
const reducers = {
  test: testReducer,
  modal: modalReducer,
};

export default combineReducers(reducers);
