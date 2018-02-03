import React, { Component } from "react";
import ColumnList from "./ColumnList.js";
import AddList from "./AddList.js";
import { connect } from "react-redux";
import { Droppable } from "react-beautiful-dnd";

const mapStateToProps = state => ({
  listTitles: state.listTitles
});

class ColumnContainer extends Component {
  render() {
    return (
      <Droppable
        droppableId="droppable"
        direction="horizontal"
        ignoreContainerClipping={false}
      >
        {(provided, snapshot) => (
          <div ref={provided.innerRef} className="ColumnContainer">
            {this.props.listTitles.map((title, i) => (
              <ColumnList key={i} listTitle={title} i={i} />
            ))}
            <AddList />
          </div>
        )}
      </Droppable>
    );
  }
}

export default connect(mapStateToProps, null)(ColumnContainer);
