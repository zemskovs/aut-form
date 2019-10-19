import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

import './button.scss';

export interface IButton {
  onAction: () => void,
  iconType?: string,
  title?: string,
  color?: string,
  withBorder?: boolean,
  likeIcon?: boolean,
}

const Button = ({color = "black", likeIcon = false, ...props}:IButton) => {
  const styles = {
    border: props.withBorder ? `2px solid ${color}` : "",
    color: color
  }
  return (
      <div className="button" onClick={() => props.onAction()}>
        {
          likeIcon
          ? <Icon type={props.iconType} style={{fontSize: "20px", ...styles}}/> 
          : <div 
              className="titled-button" 
              style={{ ...styles }}
            >
                <span>{props.title}</span>
            </div>
        } 
      </div>
  )
}

Button.defaultProps = {
  color: "black",
  likeIcon: false,
}

export default Button;
