import React from 'react';
import { Icon } from 'antd';

import './add-button.scss';

const AddButton = (props) => {
  return (
    <div className="add-button" onClick={() => props.onAdd()}>
      {
        props.title
        ? <div 
            className="titled-button" 
            style={{ border: `2px solid ${props.color}` }}
          >
              <span>{props.title}</span>
          </div>
        : <Icon type="plus" style={{fontSize: "20px", color: props.color}}/>
      } 
    </div>
  )
}

export default AddButton;
