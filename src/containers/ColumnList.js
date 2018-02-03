import React, { Component } from "react";
import CardInput from "./CardInput";
import CardItem from "./CardItem"; /// this is the draggable
import ListTitle from "./ListTitle";
import { cardListrender } from "./functions.js";
import { connect } from "react-redux";
import { Draggable } from "react-beautiful-dnd";
import ColumnListContainer from "./ColumnListContainer.js";
import ListContainer from "./ListContainer";

const mapStateToProps = (state, ownProps) => ({
  cardList: state.cards[ownProps.listTitle]
});

class ColumnList extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.listTitle} index={this.props.i}>
        {(provided, snapshot) => (
          <div>
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <ColumnListContainer>
                <ListContainer>
                  <ListTitle
                    i={this.props.i}
                    listTitle={this.props.listTitle}
                  />
                  {cardListrender(
                    this.props.cardList,
                    CardItem,
                    this.props.listTitle
                  )}
                  <CardInput listTitle={this.props.listTitle} />
                </ListContainer>
              </ColumnListContainer>
            </div>
            {provided.placeholder}
          </div>
        )}
      </Draggable>
    );
  }
}

export default connect(mapStateToProps, null)(ColumnList);
