import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginPage from './components/pages/login-page';
import App from './components/app/app';
import MainPage from './components/pages/main-page';
import Categories from './components/pages/categories';
import CategoriesAddPage from './components/pages/category-add';
import Settings from './components/pages/settings';

const Routes = (props) => {
  return (
    <React.Fragment>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <App>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/categories">
          <Categories />
        </Route>
        <Route path="/categories/add">
          <CategoriesAddPage />
        </Route>
        <Route exact path="/settings">
          <Settings />
        </Route>
      </App>
    </React.Fragment>
  )
}

export default Routes;