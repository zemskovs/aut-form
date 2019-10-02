import React from 'react';
import { connect } from 'react-redux'; 

import TopBar from '../top-bar/top-bar';

import './settings.scss';

const Settings = () => {
  return (
    <div className="settings">
      <TopBar title="настройки" />
      <div className="settings-conetent">
        <h1>Settings</h1>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.authenticated
  }
}

export default connect(mapStateToProps)(Settings);
