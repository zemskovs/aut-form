import React from 'react';

import TopBar from '../top-bar/top-bar';

import './main-page.scss';

const MainPage = (props: any) => {
  return (
    <div className="main-page">
      <TopBar title="главная" />
      <div className="main-page-content">
        <h1>Main page</h1>
      </div>
    </div>
  )
}

export default MainPage
