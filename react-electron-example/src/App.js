import React, { Component } from "react";

// Static Files
import logo from "./logo.svg";

// CSS
import 'semantic-ui-css/semantic.min.css';
import "./App.css";

// Components and Routes
import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
