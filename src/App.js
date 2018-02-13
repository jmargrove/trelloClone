import React, { Component } from "react";
import Header from "./header/Header.js";
import ProjectTitleBar from "./containers/ProjectTitleBar.js";
import ColumnContainer from "./containers/ColumnContainer.js";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ProjectTitleBar />
        <ColumnContainer />
      </div>
    );
  }
}

export default App;
