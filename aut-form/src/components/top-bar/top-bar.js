import React from 'react';
import { withRouter } from 'react-router-dom';
import { Icon } from 'antd';

import './top-bar.css';

const TopBar = (props) => {
  return (
    <div className="top-bar">
      {
        props.backButton 
          ? (
            <div 
              className="back-button" 
              onClick={() => props.history.goBack()}>
              <Icon type="left" 
                style={{fontSize: "20px", color: "#1890ff"}}/>
            </div>)
          : null
        }
      <span className="title">{props.title.toUpperCase()}</span>
      {
        props.funcComponent
          ? <div className="functional-component">{props.funcComponent()}</div>
          : null
      }
    </div>
  )
}

export default withRouter(TopBar);
