import React from 'react';

import './form.scss';

export interface IFromProps {
  handleSubmit: () => void,
  validateFunc?: () => void,
  class?: string,
}

const Form: React.FC<IFromProps> = (props) => {
  return (
    <form 
      className={props.class} 
      onSubmit={() => props.handleSubmit()}
    >
      {props.children}
    </form>
  )
}

export default Form;
