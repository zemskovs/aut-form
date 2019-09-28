import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import TopBar from '../top-bar/top-bar';
import AddButton from '../add-button/add-button';
import authenticated from '../../hocs/authenticated';

import './main-page.css';

const MainPage = (props) => {
  return (
    <div className="main-page">
      <TopBar title="главная" />
      <div className="main-page-content">
        <h1>Main page</h1>
        <AddButton title="добавить покупку" addAction={() => {}} />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.authenticated
  }
}

export default connect(mapStateToProps)(authenticated(MainPage));
