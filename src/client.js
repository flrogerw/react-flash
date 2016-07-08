import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import store from './store.js';
import routes from './routes.js';

ReactDOM.render(
    // The top-level Provider is what allows us to `connect` components to the store
    // using ReactRedux.connect (see components Home and Hero)
    <Provider store={store}>
       <Router history={browserHistory} routes={routes}/>
    </Provider>,
   document.getElementById("root")
);
