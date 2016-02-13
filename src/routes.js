import React from 'react';
import { Route } from 'react-router';

import App from './containers/App';
import PartiesList from './containers/PartiesList';
import PartyCreate from './containers/PartyCreate';
import PartyDetail from './containers/PartyDetail';

export default (
  <Route path="/" component={App}>
    <Route path="coparties" component={PartiesList}/>
    <Route path="coparties/new" component={PartyCreate}/>
    <Route path="coparties/:id" component={PartyDetail}/>
  </Route>
);
