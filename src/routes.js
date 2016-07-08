import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import TestStart from './containers/TestStart.js';
import TestPage from './containers/TestPage.js';
import TestSearch from './containers/TestSearch.js';
import TestCreate from './containers/TestCreate.js';
import App from './containers/App.js';


 module.exports = (
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/search" component={TestSearch} />
      <Route path="/start" component={TestStart} />
      <Route path="/test" component={TestPage} />
      <Route path="/create" component={TestCreate} />
    </Router>
  );
