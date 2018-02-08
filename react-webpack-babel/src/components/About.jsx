import React from "react";
import { observer } from "mobx-react";
import Sample from "./Sample";

function showData(props) {
	props.store.updateTitle("I am Updated");
}

const About = props => (
	<div onClick={() => showData(props)}>
		Update Store, Current value
		<Sample {...props} />
	</div>
);

export default observer(About);
