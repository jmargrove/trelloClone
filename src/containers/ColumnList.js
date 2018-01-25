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

const dragSource = {
  beginDrag(component) {
    return {
      item:{
        id: {
          component.props.id,
        }
      }
    };
  }
};

class ColumnList extends Component {
  render() {
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
