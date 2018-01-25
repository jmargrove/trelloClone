import React, { Component } from "react";
import { ColumnListContainer, ListContainer } from "./styled";
import CardInput from "./CardInput";
import CardItem from "./CardItem";
import ListTitle from "./ListTitle";
import { cardListrender } from "./functions.js";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
  cardList: state.cards[ownProps.listTitle]
});

const CardSource = {
  beginDrag() {
    return {
      id: this.getProps().id
    };
  }
};

class ColumnList extends React.Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  };

  render() {
    const { title, isDragging, connectDragSource } = this.props;
    const classNames = classSet({
      Card: true,
      "Card--placeholder": isDragging
    });

    return (
      <ColumnListContainer>
        <ListContainer>
          <ListTitle listTitle={this.props.listTitle} />
          {cardListrender(this.props.cardList, CardItem)}
          <CardInput listTitle={this.props.listTitle} />
        </ListContainer>
      </ColumnListContainer>
    );
  }
}

export default connect(mapStateToProps, null)(ColumnList);
