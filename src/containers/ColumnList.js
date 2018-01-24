import React, { Component } from "react";
import { ColumnListContainer, ListContainer } from "./styled";
import CardInput from "./CardInput";
import CardItem from "./CardItem";
import ListTitle from "./ListTitle";
import { cardListrender } from "./functions.js";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  console.log("the state:::::", state, "own props::::", ownProps);
  return {
    cardList: state.cards[ownProps.listTitle]
  };
};

class ColumnList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardList: []
    };
  }

  addingToTheCardlist = newCard => {
    this.setState(prevState => {
      prevState.cardList.push(newCard);
      return { cardList: prevState.cardList };
    });
  };

  render() {
    return (
      <ColumnListContainer>
        <ListContainer>
          <ListTitle listTitle={this.props.listTitle} />
          {cardListrender(this.props.cardList, CardItem)}
          <CardInput
            listTitle={this.props.listTitle}
            addingToTheCardlist={this.addingToTheCardlist}
          />
        </ListContainer>
      </ColumnListContainer>
    );
  }
}

export default connect(mapStateToProps, null)(ColumnList);
