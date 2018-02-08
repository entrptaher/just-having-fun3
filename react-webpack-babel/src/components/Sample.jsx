import React from "react";
import { Form } from "semantic-ui-react";

const Sample = props => (
	<div>
		{props.store.title} {props.store.count}
	</div>
);

export default Sample;
