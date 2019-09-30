import React from 'react';

import AddButton from '../add-button/add-button';
import helpers from '../../helpers/helpres';

import './category-item.scss';

const CategoryItem = (props) => {
  const category = props.item;
  const bgcolor = helpers.styles.categoryBgColor(props.item.spent, props.item.limit);
  debugger
  return (
    <div className="category" style={{ backgroundColor: bgcolor, }}>
      <div className="info-block">
        <span className="title">{category.title}</span>
        <span className="spent">Потрачено: {category.spent}</span>
        <span className="limit">Лимит: {category.limit}</span>
      </div>
      <div className="add">
        <AddButton />  
      </div>
    </div>
  )
}

export default CategoryItem;
