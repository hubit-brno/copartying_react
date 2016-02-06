import { combineReducers } from 'redux-immutable';

import copartiesAppState from "./coparties.js";

const rootReducer = combineReducers({
  copartiesAppState
});

export default rootReducer;
