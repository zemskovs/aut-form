import React from 'react';
import PropTypes from 'prop-types';

import './input.scss';

export interface IInputProps {
  name: string,
  value: string|number,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  label: string,
  type?: string,
  placeholder?: string
}

const Input = ({type = "text", ...props}: IInputProps) => {
  const { label, ...inputProps } = props;
  const upperLabel = label.charAt(0).toUpperCase() + label.slice(1).toLowerCase();
  return (
    <div className="user-input">
    <label>
      <span className="input-label">{upperLabel}</span>
      <input {...inputProps} type={type} />
    </label>
    </div>
  )
}

export default Input;
