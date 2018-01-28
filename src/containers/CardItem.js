import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { DragSource } from "react-dnd";
import { ItemTypes } from "./Constants";

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

/// what is the draggable content really
const cardSource = {
  beginDrag(props) {
    text: props.children;
  }
};

DragSource(ItemTypes.Card, cardSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(CardItem);
class CardItem extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,

    // injected by React dnd,
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  };
  render() {
    const { isDragging, connectDragSource, text } = this.props;
    return connectDragSource(
      <div style={{ overflow: "auto" }}>
        <CardItemContainer>
          <CardItemText>{this.props.children}</CardItemText>
        </CardItemContainer>
      </div>
    );
  }
}

export default CardItem;
