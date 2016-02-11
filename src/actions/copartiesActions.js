import * as types from '../actionTypes.js';

export function createCoparty(coparty) {
  return { type: types.CREATE_COPARTY, coparty };
}

export function loadCoparties() {
  return (dispatch) => {

    dispatch({
      type: types.LOADING_COPARTIES
    });

    fetch('http://localhost:8080/api/v1/coparties')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch({
          type: types.LOADED_COPARTIES,
          coparties: json
        });
      });

  };
}
