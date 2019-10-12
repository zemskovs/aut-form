import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

// import Settings from './settings';
// import MainPage from './main-page';
// import MenuBar from '../menu-bar/menu-bar'

class HomePage extends React.Component {
  componentDidMount() {

  }

  render() {
    if (this.props.authenticated)
      return (
        <div className='home'>
          <h1>Home page</h1>
          <Switch>
            {/* <Route exact path="/" component={MainPage} />
            <Route path="/categories" component={Categories} />
            <Route path="/settings" component={Settings} /> */}
          </Switch>
          {/* <MenuBar /> */}
        </div>
      );

    return <Redirect to="/login" />
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.authenticated
  }
}

export default connect(mapStateToProps)(HomePage);
