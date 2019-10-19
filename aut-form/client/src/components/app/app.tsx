import React from 'react';
import { connect } from 'react-redux';

import { IGlobalAppState } from '../../store/reducer';

import Navigation from '../navigation/navigation';
import authenticated from '../../hocs/authenticated';

import './app.scss';

const App = (props: any) => {
  return (
    <div className="app">
      <div className="content">
        {props.children}
      </div>
      <Navigation />
    </div>
  )
}

const mapStateToProps = (state: IGlobalAppState) => {
  return {
    authenticated: state.authenticated,
  }
}

export default connect(mapStateToProps)(authenticated(App));
