import React from 'react';
import { Icon } from 'antd';

import './add-button.scss';

const AddButton = (props) => {
  return (
    <div className="add-button" onClick={() => props.onAdd()}>
      {
        props.title
        ? <div className="titled-button"><span>{props.title}</span></div>
        : <Icon type="plus" style={{fontSize: "20px", color: "#1890ff"}}/>
      } 
    </div>
  )
}

export default AddButton;
