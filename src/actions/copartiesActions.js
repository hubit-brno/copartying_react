import * as types from '../actionTypes.js';

export function createCoparty(coparty) {
  return { type: types.CREATE_COPARTY, coparty };
}
