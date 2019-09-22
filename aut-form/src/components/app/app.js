import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginPage from '../pages/login-page';
import Settings from '../pages/settings';
import Categories from '../pages/categories';
import MainPage from '../pages/main-page';
import Navigation from '../navigation/navigation';

import './app.css';

const App = (props) => {
  return (
    <React.Fragment>
      <Route exact path="/login" component={LoginPage} />
      <div className="app">
        <div className="content">
          <Route exact path="/" component={MainPage} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/settings" component={Settings} />  
        </div>
        {props.authenticated ? <Navigation /> : null}
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.authenticated,
  }
}

export default connect(mapStateToProps)(App);
