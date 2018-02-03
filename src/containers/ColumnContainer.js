import React, { Component } from "react";
import ColumnList from "./ColumnList.js";
import AddList from "./AddList.js";
import { connect } from "react-redux";
import uuid from "uuid/v1";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";

const mapStateToProps = state => ({
  listTitles: state.listTitles
});

class ColumnContainer extends Component {
  render() {
    return (
      <div className="ColumnContainer">
        {this.props.listTitles.map((title, i) => (
          <ColumnList key={uuid()} listTitle={title} i={i} />
        ))}
        <AddList />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(ColumnContainer); //connect(mapStateToProps, null)(ColumnContainer);
