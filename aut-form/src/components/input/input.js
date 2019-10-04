import React from 'react';
import PropTypes from 'prop-types';

import './input.scss';

const Input = (props) => {
  const { label, ...inputProps } = props;
  return (
    <div className="user-input">
    <label>
      <span className="input-label">{label}</span>
      <input {...inputProps} />
    </label>
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType(
    [
      PropTypes.string,
      PropTypes.number
    ]
  ).isRequired,
  onChange: PropTypes.func.isRequired
}

Input.defaultProps = {
  type: 'text',
  value: '',
  label: '',
  placeholder: ''
}

export default Input;
