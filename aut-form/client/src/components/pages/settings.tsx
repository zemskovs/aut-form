import React from 'react';

import TopBar from '../top-bar/top-bar';

import './settings.scss';

const Settings = (props: any) => {
  return (
    <div className="settings">
      <TopBar title="настройки" />
      <div className="settings-conetent">
        <h1>Settings</h1>
      </div>
    </div>
  )
}

export default Settings;
