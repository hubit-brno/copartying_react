import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import Immutable from 'immutable';
import { Router, hashHistory } from 'react-router';

import configureStore from './configureStore';
import routes from './routes';

import './styles.scss';

import promise from 'es6-promise';
promise.polyfill();
import 'isomorphic-fetch';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes}/>
  </Provider>, document.getElementById('app')
);
