import Immutable from "immutable";

import * as types from "../actionTypes.js";

const initialState = Immutable.fromJS({
  actualCoparty: null,
  showForm: false
});

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_COPARTY:
      return state.merge({
        showForm: true
      });
    default:
      return state;
  }
};
