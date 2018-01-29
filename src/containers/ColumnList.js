import React, { Component } from "react";
import { ColumnListContainer, ListContainer } from "./styled";
import CardInput from "./CardInput";
import CardItem from "./CardItem"; /// this is the draggable
import ListTitle from "./ListTitle";
import { cardListrender } from "./functions.js";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
  cardList: state.cards[ownProps.listTitle]
});

class ColumnList extends React.Component {
  render() {
    return (
      <ColumnListContainer>
        <ListContainer>
          <ListTitle listTitle={this.props.listTitle} />
          {cardListrender(this.props.cardList, CardItem, this.props.listTitle)}
          <CardInput listTitle={this.props.listTitle} />
        </ListContainer>
      </ColumnListContainer>
    );
  }
}

export default connect(mapStateToProps, null)(ColumnList);
