import React, { Component } from "react";
import ColumnList from "./ColumnList.js";
import AddList from "./AddList.js";
import { connect } from "react-redux";
import { Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import { reorderCols } from "./../actions";

const mapDispatchToProps = dispatch => ({
  reorderCols: obj => dispatch(reorderCols(obj))
});

const mapStateToProps = state => ({
  listTitles: state.listTitles
});

class ColumnContainer extends Component {
  onDragEnd = result => {
    this.props.reorderCols(result);
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided, snapshot) => (
            <div ref={provided.innerRef} className="ColumnContainer">
              {this.props.listTitles.map((title, i) => (
                <ColumnList key={i} listTitle={title} i={i} />
              ))}
              <AddList />
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColumnContainer);
