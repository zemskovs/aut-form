import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './store/reducer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import CategoriesService from './service/categories-service';
import { ServiceContext } from './context';
import routes from './routes';

const categoriesService = new CategoriesService();

ReactDOM.render(
  <Provider store={createStore(reducer)}>
    <Router>
      <ServiceContext.Provider value={categoriesService}>
        {routes}
      </ServiceContext.Provider>
    </Router>
  </Provider>,
  document.getElementById('root')
);
