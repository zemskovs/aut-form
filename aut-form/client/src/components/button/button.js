import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

import './button.scss';

const Button = (props) => {
  const styles = {
    border: props.withBorder ? `2px solid ${props.color}` : "",
    color: props.color
  }
  return (
      <div className="button" onClick={() => props.onAction()}>
        {
          props.likeIcon
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

Button.propTypes = {
  iconType: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
  onAction: PropTypes.func.isRequired,
  withBorder: PropTypes.bool,
  likeIcon: PropTypes.bool,
}

Button.defaultProps = {
  color: "black",
  likeIcon: false,
}

export default Button;
