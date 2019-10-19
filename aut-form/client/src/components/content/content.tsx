import React from 'react';

import './content.scss'

const Content = (props: any) => {
  return (
    <div className="content">
      {props.children}
    </div>
  )
}

export default Content;
