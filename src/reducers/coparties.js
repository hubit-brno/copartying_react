import Immutable from "immutable";

import * as types from "../actionTypes.js";

const initialState = Immutable.fromJS({
  actualCoparty: null,
  showForm: false,
  coparties: [],
  isSyncing: false
});

export default (state = initialState, action) => {
  switch (action.type) {

    case types.CREATE_COPARTY:
      return state.merge({
        showForm: true
      });

    case types.LOADING_COPARTIES:
      return state.merge({
        isSyncing: true
      });

    case types.LOADED_COPARTIES:
      return state.merge({
        coparties: action.coparties,
        isSyncing: false
      });

    default:
      return state;
  }
};
