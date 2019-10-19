import React from 'react';
import { connect } from 'react-redux';

import TopBar from '../top-bar/top-bar';

import './main-page.scss';

const MainPage = (props) => {
  return (
    <div className="main-page">
      <TopBar title="главная" />
      <div className="main-page-content">
        <h1>Main page</h1>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.authenticated
  }
}

export default connect(mapStateToProps)(MainPage);
