import React from 'react';
import { Icon } from 'antd';

import './button.scss';

export interface IButton {
  onClick: () => void,
  iconType?: string,
  title?: string,
  color?: string,
  withBorder?: boolean,
  likeIcon?: boolean,
}

const Button: React.FC<IButton> = (props) => {
  props = {color: "rgba(0, 0, 0, 0.65)", likeIcon: false, ...props}
  const btnTitle = props.title || "";
  const styles = {
    border: props.withBorder ? `2px solid ${props.color}` : "",
    color: props.color
  }
  return (
      <div className="button" onClick={() => props.onClick()}>
        {
          props.likeIcon
          ? <Icon type={props.iconType} style={{fontSize: "20px", ...styles}}/> 
          : <div 
              className="titled-button" 
              style={{ ...styles }}
            >
                <span>{btnTitle}</span>
            </div>
        } 
      </div>
  )
}

export default Button;
