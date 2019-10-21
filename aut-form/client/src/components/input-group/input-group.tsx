import React from 'react';

import './input-group.scss';

export interface IInputGroupProps {
  children: any,
  direction?: "row"|"column",
  groupTitle?: string,
  class?: string,
}

const InputGroup: React.FC<IInputGroupProps> = (props) => {
  props = { direction: "row", ...props};
  let clsName = "input-group-" + (props.direction);

  return (
    <div className={`group ${props.class || ""}`}>
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
