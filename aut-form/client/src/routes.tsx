import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginPage from './components/pages/login-page';
import App from './components/app/app';
import MainPage from './components/pages/main-page';
import Categories from './components/pages/categories';
import CategoriesAddPage from './components/pages/category-add';
import Settings from './components/pages/settings';

const Routes = (props: any) => {
  return (
    <React.Fragment>
      <Route exact path="/login" render={(routeProps) => <LoginPage {...routeProps}/>} />
      <App>
        <Route exact path="/" render={(routeProps) => <MainPage {...routeProps}/>} />
        <Route exact path="/categories" render={(routeProps) => <Categories {...routeProps}/>} />
        <Route path="/categories/add" render={(routeProps) => <CategoriesAddPage {...routeProps}/>} />
        <Route exact path="/settings" render={(routeProps) => <Settings {...routeProps}/>} />
      </App>
    </React.Fragment>
  )
}

export default Routes;
