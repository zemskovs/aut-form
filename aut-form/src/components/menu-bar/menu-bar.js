import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Icon } from 'antd';

const MenuBar = () => {
  return (
    <Row type="flex" justify="space-around">
      <Col>
        <Link to="/">
          <Icon type="home" style={{ fontSize: '25px' }} />
        </Link>
      </Col>
      <Col>
        <Link to="/categories">
          <Icon type="ordered-list" style={{ fontSize: '25px' }} />
        </Link>
      </Col>
      <Col>
        <Link to="/settings">
         <Icon type="menu" style={{ fontSize: '25px' }} />
        </Link>
      </Col>
    </Row>
  )
}

export default MenuBar;