import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import App from "./app";
import About from "./components/About";
import Sample from "./components/Sample";
import "styles/index.scss";

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
						render={props => <App {...props} store={store} />}
					/>
					<Route
						path="/messages"
						render={props => <Sample {...props} store={store} />}
					/>
					<Route
						path="/friends"
						render={props => <About {...props} store={store} />}
					/>
				</div>
			</Router>
		);
	}
}

export default Routes;
