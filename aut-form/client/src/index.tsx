import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './store/reducer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Routes from './routes';

ReactDOM.render(
  <Provider store={createStore(reducer)}>
    <Router>
      <Routes/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
