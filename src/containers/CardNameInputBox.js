import React, { Component } from "react";
import InputListButton from "./InputListButton.js";
import styled from "styled-components";

const ListCardDetailsInput = styled.textarea`
  outline: none;
  border: none;
  padding: 0;
  margin: 0;
  width: 230px;
  background-color: white;
  font-size: 15px;
  overflow: hidden;
  word-wrap: break-word;
  resize: none;
  color: black;
  text-align: left;
  font-family: "Nunito Sans", sans-serif;
  font-weight: normal;
`;

const CardItemContainer = styled.div`
  margin: 10px;
  margin-top: 0;
  padding: 10px;
  background-color: white;
  border-radius: 6px;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
`;

class CardNameInputBox extends Component {
  addingNewCardName = () => {
    console.log("calling and showing the new", this.newCardName.value);
    this.props.onClick();
    this.props.addingToTheCardlist(this.newCardName.value);
  };

  render() {
    return (
      <div style={{ overflow: "auto" }}>
        <CardItemContainer>
          <ListCardDetailsInput
            innerRef={el => (this.newCardName = el)}
            required={true}
            rows="3"
            autoFocus={true}
            placeholder="Add card name..."
          />
        </CardItemContainer>
        <InputListButton onClick={this.addingNewCardName} />
      </div>
    );
  }
}

export default CardNameInputBox;
