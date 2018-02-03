import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { moveItem } from "./../actions";
import { DragSource } from "react-dnd";
import { ItemTypes } from "./../Constants";
import PropTypes from "prop-types";

const cardSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const CardItemContainer = styled.div`
  margin: 10px;
  padding: 10px;
  margin-top: 0;
  background-color: white;
  border-radius: 6px;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
`;

const CardItemText = styled.div`
  font-size: 15px;
  font-family: "Nunito Sans", sans-serif;
`;

const mapDispatchToProps = dispatch => ({
  moveCard: id => dispatch(moveItem(id))
});

class CardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div style={{ overflow: "auto" }}>
        <CardItemContainer
          onClick={() => {
            this.props.moveCard(this.props.id);
            this.setState((prevState, props) => {
              return {
                selected: !prevState.selected
              };
            });
          }}
          style={{
            backgroundColor: this.state.selected ? "#dfdfdf" : "white"
          }}
        >
          <CardItemText>{this.props.children}</CardItemText>
        </CardItemContainer>
      </div>
    );
  }
}

CardItem.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.CARD, cardSource, collect)(CardItem);

//connect(null, mapDispatchToProps)
