import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Nav = props => (
	<NavLink
		exact
		{...props}
		activeClassName="active"
	/>
);

const Navigation = () => (
	<Menu inverted>
		<Menu.Item as={Nav} to="/" name="home" />
		<Menu.Item as={Nav} to="/messages" name="messages" />
		<Menu.Item as={Nav} to="/settings" name="settings" />
	</Menu>
);

export default Navigation;
