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
	<Menu secondary>
		<Menu.Item as={Nav} to="/" name="home" />
		<Menu.Item as={Nav} to="/messages" name="messages" />
		<Menu.Item as={Nav} to="/friends" name="friends" />
	</Menu>
);

export default Navigation;
