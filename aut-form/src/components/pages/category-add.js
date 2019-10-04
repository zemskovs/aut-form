import React from "react";
import { connect } from "react-redux";

import TopBar from '../top-bar/top-bar';
import AddList from '../add-list/add-list';
import CategoryAddForm from '../category-add-form/category-add-form';

const CategoriesAddPage = (props) => {
  return (
    <div className="categories-add">
      <TopBar title="добавить категории" backButton={true} />
      <div className="categories-add-content">
        <AddList 
          title="добавить категории"
          dataModel={{ categoryTitle: "", rubs: 0, pennies: 0 }}
          renderForm={CategoryAddForm}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.authenticated,
  }
}

export default connect(mapStateToProps)(CategoriesAddPage);