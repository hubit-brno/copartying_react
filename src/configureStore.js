import { createStore, compose, applyMiddleware } from 'redux';
import Immutable from 'immutable';
import { persistState } from 'redux-devtools';

import rootReducer from './reducers';
import DevTools from './components/devTools/DevTools.js';
import thunkMiddleware from 'redux-thunk';

export default function configureStore(initialState = Immutable.fromJS({})) {
  const store = createStore(rootReducer, initialState, window.devToolsExtension ? window.devToolsExtension() : applyMiddleware(thunkMiddleware));

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
