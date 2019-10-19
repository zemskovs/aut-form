import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { IGlobalAppState } from '../../store/reducer';

import LoginForm from '../LoginForm/loginForm';

export interface ILoginPageProps {
  authenticated: boolean
}

const LoginPage = (props: ILoginPageProps) => {
  if (props.authenticated)
			return <Redirect to="/" />

  return (
    <div>
      <LoginForm></LoginForm>
    </div>
  )
}

const mapStateToProps = (state: IGlobalAppState) => {
  return {
    authenticated: state.authenticated
  }
}

export default connect(mapStateToProps)(LoginPage);
