import React from "react";
import "semantic-ui-css/semantic.min.css";
import "normalize.css";
import "styles/index.scss";
import { Button } from 'semantic-ui-react'



const App = () => (
	<div className="App">
		<div>
			<Button.Group>
				<Button icon='play' content='Start' positive/>
		  	<Button icon='stop' content='Stop' negative/>
			</Button.Group>
		</div>
	</div>
);

export default App;
