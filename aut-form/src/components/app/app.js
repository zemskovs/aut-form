import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginPage from '../pages/login-page';
import Settings from '../pages/settings';
import Categories from '../pages/categories';
import MainPage from '../pages/main-page';
import Navigation from '../navigation/navigation';
import CategoriesAddPage from '../pages/category-add';

import './app.scss';

const App = (props) => {
  return (
    <Router>
        <Route exact path="/login" component={LoginPage} />
        <div className="app">
          <div className="content">
            <Route exact path="/" component={MainPage} />
            <Route exact path="/categories" component={Categories} />
            <Route path="/categories/add" component={CategoriesAddPage} />
            <Route exact path="/settings" component={Settings} />  
          </div>
          {props.authenticated ? <Navigation /> : null}
        </div>
    </Router>
  )
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.authenticated,
  }
}

export default connect(mapStateToProps)(App);
