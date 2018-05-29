import React, { Component } from "react";
import { connect } from "react-redux";
import SquareButton from "./../presentational/SquareButton";
import styled from "styled-components";
import { addNewCard } from "./../actions.js";

const mapDispatchToProps = dispatch => ({
  addNewCard: (card: string, title: string) => dispatch(addNewCard(card, title))
});

class CardNameInputBox extends Component {
  addingNewCardName = () => {
    this.props.onClick();
    this.props.addNewCard(this.newCardName.value, this.props.listTitle);
  };

  closingInputBox = () => {
    this.props.closeInputBox();
  };

  render() {
    return (
      <div style={{ overflow: "auto" }}>
        <CardItemContainer>
          <ListCardDetailsInput
            onKeyPress={e => {
              if (e.key === "Enter") {
                this.addingNewCardName();
              }
            }}
            innerRef={el => (this.newCardName = el)}
            required={true}
            rows="3"
            autoFocus={true}
            placeholder="Add card name..."
          />
        </CardItemContainer>
        <div style={{ display: "flex", flexDirection: "rows" }}>
          <SquareButton
            closeToggle={false}
            onClick={() => {
              this.addingNewCardName();
            }}
          />
          <SquareButton
            closeToggle={true}
            onClick={() => {
              this.closingInputBox();
            }}
          />
        </div>
      </div>
    );
  }
}

const ListCardDetailsInput = styled.input`
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

export default connect(null, mapDispatchToProps)(CardNameInputBox);
