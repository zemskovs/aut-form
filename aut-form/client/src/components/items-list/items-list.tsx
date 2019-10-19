import React from 'react';

import './items-list.scss';

const ItemsList = (props: any) => {
  return (
    <div className="items-list">
      {props.children}
    </div>
  )
}

export default ItemsList;