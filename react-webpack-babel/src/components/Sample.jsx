import React from "react";
import { Form } from "semantic-ui-react";
import { observer } from "mobx-react";
const Sample = props => {
	console.log(props);
	return (
		<div>
			{props.store.UserData.title} {props.store.UserData.count}
		</div>
	);
};

export default observer(Sample);
