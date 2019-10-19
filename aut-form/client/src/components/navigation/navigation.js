import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Icon } from 'antd';

import './navigation.scss';

const navItems = [
  {
    navItem: 'home',
    iconType: 'home',
    link: '/',
    exact: true,
  },
  {
    navItem: 'categories',
    iconType: 'dollar',
    link: '/categories',
    exact: false,
  },
  {
    navItem: 'settings',
    iconType: 'setting',
    link: '/settings',
    exact: false,
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
        <NavLink exact={item.exact} to={item.link} className="link" activeClassName='active-link'>
          <Icon className="icon" type={item.iconType} />
        </NavLink>
      </Col>
    )
  }

  render() {
    return (
      <div className="navigation">
        <Row type="flex" justify="space-between">
          {navItems.map((item) => this.renderMenuItem(item))}
        </Row>
      </div>
    )
  }
}