import React, { Component } from "react";
import InputListButton from "./InputListButton.js";

class CardNameInputBox extends Component {
  addingNewCardName = () => {
    console.log("calling and showing teh new", this.newCardName.value);
    this.props.onClick();
    this.props.addingToTheCardlist(this.newCardName.value);
  };

  render() {
    return (
      <div>
        <div className="CardInputBoxContainer">
          <div className="ListCardDetails">
            <textarea
              ref={el => (this.newCardName = el)}
              required={true}
              rows="3"
              autoFocus={true}
              className="ListCardDetailsInput"
              placeholder="Add card name..."
            />
          </div>
        </div>
        <InputListButton onClick={this.addingNewCardName} />
      </div>
    );
  }
}

export default CardNameInputBox;
