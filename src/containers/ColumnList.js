import React, { Component } from "react";
import styled from "styled-components";
import { ColumnListContainer, ListContainer } from "./styled";
import ListHeader from "./ListHeader";
import CardInput from "./CardInput";
import CardItem from "./CardItem";

class ColumnList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardInput: false,
      cardList: [],
      listActive: false
    };
  }

  cardListrender = () => {
    return this.state.cardList.map(cardItem => {
      return <CardItem>{cardItem}</CardItem>;
    });
  };

  addingToTheCardlist = newCard => {
    this.setState(prevState => {
      prevState.cardList.push(newCard);
      return { cardList: prevState.cardList };
    });
  };

  listHeaderHandeler = () => {
    this.setState({ cardInput: true });
  };

  render() {
    return (
      <ColumnListContainer>
        <ListContainer>
          <ListHeader addedTitle={() => this.setState({ cardInput: true })} />
          {this.state.cardInput ? this.cardListrender() : null}
          {this.state.cardInput ? (
            <CardInput addingToTheCardlist={this.addingToTheCardlist} />
          ) : null}
        </ListContainer>
      </ColumnListContainer>
    );
  }
}

export default ColumnList;
