import React from 'react';
import { connect } from 'react-redux';

import './items-list.scss';

export default class ItemsList extends React.Component {
  render() {
    return (
      <div className="items-list">
        {this.props.children}
      </div>
    )
  }
}
