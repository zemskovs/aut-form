import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './store/reducer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/app/app';
import CategoriesService from './service/categories-service';

const categoriesService = new CategoriesService();
const ServiceContext = React.createContext();

ReactDOM.render(
  <Provider store={createStore(reducer)}>
    <Router>
      <ServiceContext.Provider value={categoriesService}>
        <App />
      </ServiceContext.Provider>
    </Router>
  </Provider>,
  document.getElementById('root')
);