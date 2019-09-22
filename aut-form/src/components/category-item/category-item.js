import React from 'react';

import './category-item.css';

const CategoryItem = (props) => {
  const category = props.item;
  return (
    <div className="category">
      <span>{category.title}</span>
      <span>Потрачено: {category.spent}</span>
      <span>Лимит: {category.limit}</span>
    </div>
  )
}

export default CategoryItem;
