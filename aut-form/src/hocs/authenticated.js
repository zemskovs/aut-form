import React from 'react';
import { Redirect } from 'react-router-dom';

const authenticated = (WrappedComponent) => {
  return (props) => {
    if (!props.authenticated) {
      return <Redirect to="/login" />
    }
    return <WrappedComponent {...props} />
  }
}

export default authenticated;
