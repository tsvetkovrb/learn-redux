import { combineReducers } from "redux";

import { counter } from "./counter";
import { result } from "./result";

export const reducer = combineReducers({
  counter,
  result
});
