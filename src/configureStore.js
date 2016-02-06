import { createStore, compose, applyMiddleware } from 'redux';
import Immutable from 'immutable';
import { persistState } from 'redux-devtools';

import rootReducer from './reducers';
import DevTools from './components/devTools/DevTools.js';

export default function configureStore(initialState = Immutable.fromJS({})) {
  const store = createStore(rootReducer, initialState, window.devToolsExtension ? window.devToolsExtension() : undefined);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
