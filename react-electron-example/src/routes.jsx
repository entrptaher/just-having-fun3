import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Messages from "./components/Messages";
import Settings from "./components/Settings";

// Pass the store
import store from "./store";

class Routes extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Navigation />
					<Route
						exact
						path="/"
						render={props => <Home {...props} store={store} />}
					/>
					<Route
						path="/messages"
						render={props => <Messages {...props} store={store} />}
					/>
					<Route
						path="/settings"
						render={props => <Settings {...props} store={store} />}
					/>
				</div>
			</Router>
		);
	}
}

export default Routes;
