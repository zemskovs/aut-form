import React from "react";
import HomePage from "../pages/home-page";
import LoginPage from "../pages/login-page";
import { Route } from "react-router-dom";

const App = props => {
	return (
		<React.Fragment>
			<Route exact path="/login" component={LoginPage} />
			<Route path="/" component={HomePage} />
		</React.Fragment>
	);
};

export default App;
