import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginForm from '../LoginForm/loginForm';

const LoginPage = (props) => {
  if (props.authenticated)
			return <Redirect to="/" />

  return (
    <div>
      <LoginForm></LoginForm>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.authenticated
  }
}

export default connect(mapStateToProps)(LoginPage);
