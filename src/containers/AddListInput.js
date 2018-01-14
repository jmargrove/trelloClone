import React, { Component } from "react";
import InputListButton from "./InputListButton.js";

class AddListInput extends Component {
  render() {
    return (
      <div className="AddListInputContainer">
        <input placeholder="Add a list..." className="AddInputBox" />
        <InputListButton />
      </div>
    );
  }
}

export default AddListInput;
