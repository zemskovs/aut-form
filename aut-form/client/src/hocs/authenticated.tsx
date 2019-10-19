import React from 'react';
import { Redirect } from 'react-router-dom';

const authenticated = (WrappedComponent: React.FC) => {
  return (props: any) => {
    if (!props.authenticated) {
      return <Redirect to="/login" />
    }
    return <WrappedComponent {...props} />
  }
}

export default authenticated;
