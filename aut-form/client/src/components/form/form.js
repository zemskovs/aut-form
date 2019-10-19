import React from 'react';
import PropTypes from 'prop-types';

import './form.scss';

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit ? () => props.handleSubmit() : null}>
      {props.children}
    </form>
  )
}

Form.propTypes = {
  handleSubmit: PropTypes.func,
  validateFunc: PropTypes.func
}

export default Form;
