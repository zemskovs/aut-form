import React from 'react';
import { connect } from 'react-redux';

import Navigation from '../navigation/navigation';
import authenticated from '../../hocs/authenticated';

import './app.scss';

const App = (props) => {
  return (
    <div className="app">
      <div className="content">
        {props.children}
      </div>
      <Navigation />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.authenticated,
  }
}

export default connect(mapStateToProps)(authenticated(App));
