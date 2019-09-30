import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';

import './add-button.scss';

const AddButton = (props) => {
  return (
    <Link to={props.addPagePath}>
      <div className="add-button">
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
    </Link>
  )
}

export default AddButton;
