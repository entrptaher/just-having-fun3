import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Routes from "./routes";
import 'semantic-ui-css/semantic.min.css';

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
