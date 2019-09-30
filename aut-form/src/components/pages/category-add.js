import React from "react";
import { connect } from "react-redux";

import TopBar from '../top-bar/top-bar';
import authenticated from '../../hocs/authenticated';

const CategoriesAddPage = (props) => {
  return (
    <div className="categories-add">
      <TopBar title="добавить категорию" backButton={true} />
      <div className="categories-add-content">
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.authenticated,
  }
}

export default connect(mapStateToProps)(authenticated(CategoriesAddPage));