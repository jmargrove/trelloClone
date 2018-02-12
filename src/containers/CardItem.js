import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { moveItem } from "./../actions";
import { Draggable } from "react-beautiful-dnd";
import type {
  DraggableProvided,
  DraggableStateSnapshot
} from "react-beautiful-dnd";

const Container = styled.div`
  margin: 10px;
  padding: 10px;
  margin-top: 0;
  background-color: white;
  border-radius: 6px;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  &:hover {
    background-color: rgba(160, 234, 222, 0.95);
  }
`;

const CardItemText = styled.div`
  font-size: 15px;
  font-family: "Nunito Sans", sans-serif;
`;

const Wrapper = styled.div``;
const Tube = styled.div``;

const mapDispatchToProps = dispatch => ({
  moveCard: (id: object) => dispatch(moveItem(id))
});

class CardItem extends Component {
  render() {
    const id = this.props.id;
    return (
      <Draggable draggableId={id.title + id.i} index={id.i} type="CARDS">
        {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
          <Wrapper>
            <Container
              innerRef={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <Tube isDragging={snapshot.isDragging}>
                <CardItemText isDragging={snapshot.isDragging}>
                  {this.props.children}
                </CardItemText>
              </Tube>
            </Container>
            {provided.placeholder}
          </Wrapper>
        )}
      </Draggable>
    );
  }
}

export default connect(null, mapDispatchToProps)(CardItem);
