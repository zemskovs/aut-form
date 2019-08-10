import React from 'react';

import HomePage from '../pages/home-page';
import LoginPage from '../pages/login-page';

const App = (props) => {
  if (props.login)
      return <HomePage />
  return <LoginPage />
}

export default App;