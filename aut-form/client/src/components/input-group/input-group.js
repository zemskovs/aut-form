import React from 'react';
import PropTypes from 'prop-types';

import './input-group.scss';

const InputGroup = (props) => {
  const clsName = "input-group-" + (props.direction);
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

InputGroup.propTypes = {
  direction: PropTypes.oneOf(['row', 'column']),
  groupTitle: PropTypes.string
}

InputGroup.defaultProps = {
  direction: 'row'
}

export default InputGroup;
