import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Icon } from 'antd';

import './navigation.css';

const navItems = [
  {
    navItem: 'home',
    iconType: 'home',
    link: '/'
  },
  {
    navItem: 'categories',
    iconType: 'ordered-list',
    link: '/categories'
  },
  {
    navItem: 'settings',
    iconType: 'setting',
    link: '/settings'
  }
]

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.renderMenuItem = this.renderNavItem.bind(this);
  }

  renderNavItem(item) {
    return (
      <Col key={item.navItem}>
        <NavLink exact to={item.link} className="link" activeClassName='active-link'>
          <Icon className="icon" type={item.iconType} />
        </NavLink>
      </Col>
    )
  }

  render() {
    return (
      <div className="navigation">
        <Row type="flex" justify="space-around">
          {navItems.map((item) => this.renderMenuItem(item))}
        </Row>
      </div>
    )
  }
}
