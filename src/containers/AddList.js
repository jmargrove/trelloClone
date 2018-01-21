import React, { Component } from "react";
import styled from "styled-components";
import { ColumnListContainer, ListContainer } from "./styled";
import AddListButton from "./AddListButton";
import AddListInput from "./AddListInput";

class AddList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonInputTitle: "Button"
    };
  }

  clickHandler = () => {
    this.setState({ buttonInputTitle: "Button" });
  };

  switchHandler = () => {
    switch (this.state.buttonInputTitle) {
      case "Button":
        return (
          <AddListButton
            onClick={() => this.setState({ buttonInputTitle: "Input" })}
          />
        );
      case "Input":
        return <AddListInput onClick={this.clickHandler} />;
    }
  };

  render() {
    return (
      <ColumnListContainer>
        <ListContainer>{this.switchHandler()}</ListContainer>
      </ColumnListContainer>
    );
  }
}

export default AddList;
