import React from 'react';
import { Progress } from 'antd';

import Button from '../button/button';
import helpers from '../../helpers/helpres';

import './category-item.scss';
import { ICategotyItem } from '../../service/categories-service';

export interface ICategoryItemProps {
  item: ICategotyItem
}

const CategoryItem = (props: ICategoryItemProps) => {
  const spent = props.item.spent || 0;
  const category = props.item;
  const progressColor = helpers.styles.progressColor(spent, props.item.limit);
  const spentInPercent = spent / props.item.limit * 100;

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
