import { combineReducers } from "redux";

import reducer from "./reducer";

export default combineReducers({
  appReduxStore: reducer,
});
