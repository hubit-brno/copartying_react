import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import Immutable from 'immutable';

import AppContainer from './components/appContainer/AppContainer.js';
import configureStore from './configureStore';
import './styles.scss';

import promise from 'es6-promise';
promise.polyfill();
import 'isomorphic-fetch';

const store = configureStore();

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>, document.getElementById('app')
);
