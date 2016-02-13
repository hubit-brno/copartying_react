import { combineReducers } from 'redux-immutable';
import { routeReducer } from 'react-router-redux';

import copartiesAppState from "./coparties.js";

const rootReducer = combineReducers({
  routing: routeReducer,
  copartiesAppState
});

export default rootReducer;
