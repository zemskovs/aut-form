import React from 'react';
import { Progress } from 'antd';

import Button from '../button/button';
import helpers from '../../helpers/helpres';

import './category-item.scss';

const CategoryItem = (props) => {
  const category = props.item;
  const progressColor = helpers.styles.progressColor(props.item.spent, props.item.limit);
  const spentInPercent = props.item.spent / props.item.limit * 100;

  return (
    <div className="category">
      <div className="info-block">
        <span className="title">{category.title}</span>
        <span className="spent">Потрачено: {category.spent}</span>
        <span className="limit">Лимит: {category.limit}</span>
        <Progress percent={spentInPercent} showInfo={false} strokeColor={progressColor} />
      </div>
      <div className="add">
        <Button 
          onAction={() => ""} 
          likeIcon={true} 
          iconType="plus" />  
      </div>
    </div>
  )
}

export default CategoryItem;
