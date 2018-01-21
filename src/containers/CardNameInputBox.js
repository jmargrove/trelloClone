import React, { Component } from "react";
import SquareButton from "./SquareButton";
import styled from "styled-components";

class CardNameInputBox extends Component {
  addingNewCardName = () => {
    console.log("the card input");
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
        <SquareButton
          onClick={() => {
            console.log("the card name", this.newCardName.value);
            this.addingNewCardName();
          }}
        />
      </div>
    );
  }
}

const ListCardDetailsInput = styled.textarea`
  outline: none;
  border: none;
  width: 230px;
  background-color: white;
  font-size: 15px;
  overflow: hidden;
  resize: none;
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

export default CardNameInputBox;
