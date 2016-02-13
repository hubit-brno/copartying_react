import { createStore, compose, applyMiddleware } from 'redux';
import Immutable from 'immutable';
import { persistState } from 'redux-devtools';

import rootReducer from './reducers';
import DevTools from './components/devTools/DevTools.js';
import thunkMiddleware from 'redux-thunk';
import { hashHistory } from 'react-router';
import { syncHistory } from 'react-router-redux';

const reduxRouterMiddleware = syncHistory(hashHistory);

const enhancer = compose(
  applyMiddleware(thunkMiddleware),
  applyMiddleware(reduxRouterMiddleware),
  DevTools.instrument()
);

export default function configureStore(initialState = Immutable.fromJS({})) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers');
      store.replaceReducer(nextReducer);
    });
  }

  // reduxRouterMiddleware.listenForReplays(store);

  return store;
}
