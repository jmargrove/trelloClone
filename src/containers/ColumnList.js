import React, { Component } from "react";
import { ColumnListContainer, ListContainer } from "./styled";
import CardInput from "./CardInput";
import CardItem from "./CardItem";
import ListTitle from "./ListTitle";
import { cardListrender } from "./functions.js";

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
          {cardListrender(this.state.cardList, CardItem)}
          <CardInput
            listTitle={this.props.listTitle}
            addingToTheCardlist={this.addingToTheCardlist}
          />
        </ListContainer>
      </ColumnListContainer>
    );
  }
}

export default ColumnList;
