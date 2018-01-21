import React, { Component } from "react";
import styled from "styled-components";
import { ColumnListContainer, ListContainer } from "./styled";
import ListHeader from "./ListHeader";
import CardInput from "./CardInput";

class ColumnList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardInput: false
    };
  }

  render() {
    return (
      <ColumnListContainer>
        <ListContainer>
          <ListHeader addedTitle={() => this.setState({ cardInput: true })} />

          {this.state.cardInput ? <CardInput /> : null}
        </ListContainer>
      </ColumnListContainer>
    );
  }
}

export default ColumnList;
