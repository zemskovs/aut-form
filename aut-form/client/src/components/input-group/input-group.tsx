import React from 'react';

import './input-group.scss';

export interface IInputGroupProps {
  children: any,
  direction?: "row"|"column",
  groupTitle?: string
}

const InputGroup = ({direction = "row", ...props}: IInputGroupProps) => {
  const clsName = "input-group-" + (direction);
  return (
    <div className="input-group">
      {
        props.groupTitle
        ? <span className="input-group-title">{props.groupTitle}</span>
        : null
      }
      <div className={clsName}>
        {props.children}
      </div>
    </div>
  )
}

export default InputGroup;
