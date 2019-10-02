import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginPage from './components/pages/login-page';
import App from './components/app/app';
import MainPage from './components/pages/main-page';
import Categories from './components/pages/categories';
import CategoriesAddPage from './components/pages/category-add';
import Settings from './components/pages/settings';

const routes = (
  <React.Fragment>
    <Route exact path="/login" component={LoginPage} />
    <App>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/categories" component={Categories} />
      <Route path="/categories/add" component={CategoriesAddPage} />
      <Route exact path="/settings" component={Settings} />
    </App>
  </React.Fragment>
)

export default routes;