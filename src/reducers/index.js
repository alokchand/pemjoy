import { combineReducers } from "redux";

import pem from "./pem";
import customer from "./customer";
import shop from "./shop";

export default combineReducers({
  pem,
  customer,
  shop,
});
