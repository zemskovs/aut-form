import React from 'react';
import { connect } from 'react-redux';

import './items-list.css';

export default class ItemsList extends React.Component {
  render() {
    return (
      <div className="items-list">
        {this.props.children}
      </div>
    )
  }
}
