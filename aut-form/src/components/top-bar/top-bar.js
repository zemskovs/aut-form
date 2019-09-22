import React from 'react';

import './top-bar.css';

const TopBar = (props) => {
  return (
    <div className="top-bar">
      <h3>{props.title}</h3>
    </div>
  )
}

export default TopBar;
