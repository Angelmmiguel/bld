// Load styles
require('./stylesheets/main.sass')

// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './stores/store';

// Containers
import HomeContainer from './containers/HomeContainer';
import GameContainer from './containers/GameContainer';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={HomeContainer}>
        <Route path="game" component={GameContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('content'));
