import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Icon } from 'antd';

import './navigation.scss';

export interface INavItem {
  navItem: string,
  iconType: string,
  link: string,
  exact: boolean
}

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

const Navigation = () => {

  const renderNavItem = (item: INavItem) => {
    return (
      <Col key={item.navItem}>
        <NavLink exact={item.exact} to={item.link} className="link" activeClassName='active-link'>
          <Icon className="icon" type={item.iconType} />
        </NavLink>
      </Col>
    )
  }

  return (
    <div className="navigation">
      <Row type="flex" justify="space-between">
        {navItems.map((item) => renderNavItem(item))}
      </Row>
    </div>
  )
}

export default Navigation;
