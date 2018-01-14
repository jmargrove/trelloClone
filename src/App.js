import React, { Component } from "react";
import Header from "./containers/Header.js";
import ProjectTitleBar from "./containers/ProjectTitleBar.js";
import ItemColumn from "./containers/ItemColumn.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ProjectTitleBar />
        <div className="mainContainerBody">
          <ItemColumn />
        </div>
      </div>
    );
  }
}

export default App;
