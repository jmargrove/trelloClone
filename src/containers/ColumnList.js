import React, { Component } from "react";
import CardInput from "./CardInput";
import CardItem from "./CardItem"; /// this is the draggable
import { connect } from "react-redux";
import { Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import type {
  DraggableProvided,
  DraggableStateSnapshot
} from "react-beautiful-dnd";

//// styled components...
const Wrapper = styled.div`
  margin-top: 10px;
  width: 270px;
  margin-left: 5px;
  margin-right: 5px;
`;

const Container = styled.div`
  border-radius: 5px;
  background-color: rgba(121, 165, 234, 0.2);
  overflow: auto;
  min-width: 270px;
  min-height: 45px;
`;

const Header = styled.div`
  border-radius: 5px;
  background-color: ${({ isDragging }) =>
    !isDragging ? "rgba(121, 165, 234, 0.5)" : "rgba(160, 234, 222, 0.5)"};
  height: 40px;
  overflow: auto;
  margin: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(160, 234, 222, 0.2);
  }
`;

const Title = styled.p`
  font-family: "Nunito Sans", sans-serif;
  margin: 10px;
  font-weight: 900;
  text-align: left;
  font-size: 15px;
`;

const ListContainer = styled.div``;

const mapStateToProps = (state: object, ownProps: object) => ({
  cardList: state.cards[ownProps.listTitle]
});

class ColumnList extends Component {
  render() {
    const mapCards = (listOfCards: array) => {
      if (listOfCards) {
        return listOfCards.map((card: string, i: number) => {
          return (
            <CardItem i={i} key={i} id={{ i: i, title: title }}>
              {card}
            </CardItem>
          );
        });
      }
    };

    const title = this.props.listTitle;
    const index = this.props.index;
    const cards = this.props.cardList;

    const cardList = cards => {
      return (
        <Droppable droppableId={title} type="CARDS">
          {(provided: DraggableProvided) => (
            <ListContainer innerRef={provided.innerRef}>
              {mapCards((cards: array))}
              {provided.placeholder}
            </ListContainer>
          )}
        </Droppable>
      );
    };

    return (
      <Draggable
        draggableId={title}
        index={index}
        style={{ width: 270 }}
        type="COLUMNS"
      >
        {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
          <Wrapper>
            <Container
              innerRef={provided.innerRef}
              {...provided.draggableProps}
            >
              <Header
                isDragging={snapshot.isDragging}
                {...provided.dragHandleProps}
              >
                <Title isDragging={snapshot.isDragging}>{title}</Title>
              </Header>
              {cardList(cards)}
              <CardInput listTitle={title} />
            </Container>
            {provided.placeholder}
          </Wrapper>
        )}
      </Draggable>
    );
  }
}

export default connect(mapStateToProps, null)(ColumnList);
