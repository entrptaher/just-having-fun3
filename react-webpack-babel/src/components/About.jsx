import React from "react";
import { observer } from "mobx-react";

function showData(props) {
	props.store.updateTitle2("I am Updated");
}

const About = observer(props => (
	<div onClick={() => showData(props)}>
		Update Store, Current value: {props.store.title} {props.store.count}
	</div>
));

export default About;
