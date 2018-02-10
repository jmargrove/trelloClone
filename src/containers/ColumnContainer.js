import React, { Component } from "react";
import ColumnList from "./ColumnList.js";
import AddList from "./AddList.js";
import { connect } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { reorderCols } from "./../actions";
import styled from "styled-components";
import type { DroppableProvided } from "react-beautiful-dnd";
import { moveItem } from "./../actions";

const Container = styled.div`
  padding: 10px;
  width: 100vw;
  height: 800px;
  background-color: #fafafa;
  display: flex;
  flex-direction: row;
`;

const mapDispatchToProps = dispatch => ({
  reorderCols: obj => dispatch(reorderCols(obj)),
  moveItem: obj => dispatch(moveItem(obj))
});

const mapStateToProps = state => ({
  listTitles: state.listTitles
});

class ColumnContainer extends Component {
  onDragEnd = result => {
    if (result.type === "COLUMN") {
      this.props.reorderCols(result);
    }
    if (result.type === "CARDS") {
      this.props.moveItem(result);
    }
  };

  render() {
    const titles = this.props.listTitles;
    const board = (
      <Droppable droppableId="board" direction="horizontal" type="COLUMN">
        {(provided: DroppableProvided) => (
          <Container innerRef={provided.innerRef}>
            {titles.map((title: string, index: number) => (
              <ColumnList key={title} listTitle={title} index={index} />
            ))}
            <AddList />
          </Container>
        )}
      </Droppable>
    );
    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}
        onDragStart={this.onDragStart}
      >
        {board}
      </DragDropContext>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColumnContainer);
