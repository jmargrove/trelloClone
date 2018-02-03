import React, { Component } from "react";
import Header from "./containers/Header.js";
import ProjectTitleBar from "./containers/ProjectTitleBar.js";
import ColumnContainer from "./containers/ColumnContainer.js";
import { DragDropContext } from "react-beautiful-dnd";
import "./App.css";

class App extends Component {
  onDragStart = props => {};
  onDragEnd = props => {};
  render() {
    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
      >
        <div className="App">
          <Header />
          <ProjectTitleBar />
          <ColumnContainer />
        </div>
      </DragDropContext>
    );
  }
}

export default App;
