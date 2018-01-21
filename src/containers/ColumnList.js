import React, { Component } from "react";
import styled from "styled-components";
import { ColumnListContainer, ListContainer } from "./styled";
import CardInput from "./CardInput";
import CardItem from "./CardItem";
import ListTitle from "./ListTitle";

class ColumnList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardList: []
    };
  }

  cardListrender = () => {
    if (this.state.cardList[0] !== null) {
      return this.state.cardList.map(cardItem => {
        return <CardItem>{cardItem}</CardItem>;
      });
    }
  };

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
          {this.cardListrender()}
          <CardInput addingToTheCardlist={this.addingToTheCardlist} />
        </ListContainer>
      </ColumnListContainer>
    );
  }
}

export default ColumnList;
