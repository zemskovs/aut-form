import React from "react";

import TopBar from '../top-bar/top-bar';
import AddList from '../add-list/add-list';
import CategoryAddForm from '../category-add-form/category-add-form';

const CategoriesAddPage = (props: any) => {
  return (
    <div className="categories-add">
      <TopBar title="добавить категории" backButton={true} />
      <div className="categories-add-content">
        <AddList />
      </div>
    </div>
  )
}

export default CategoriesAddPage;