import React from 'react';
import PropTypes from 'prop-types';

import './form.scss';

export interface IFromProps {
  handleSubmit: () => void,
  children: any,
  validateFunc?: () => void,
}

const Form = (props: IFromProps) => {
  return (
    <form onSubmit={props.handleSubmit ? () => props.handleSubmit() : () => {}}>
      {props.children}
    </form>
  )
}

Form.propTypes = {
  handleSubmit: PropTypes.func,
  validateFunc: PropTypes.func
}

export default Form;
