import React, { Component } from "react";
import InputListButton from "./InputListButton.js";

class AddListInput extends Component {
  render() {
    return (
      <div className="AddListInputContainer">
        <div className="AddInputBox">
          <input
            autoFocus={true}
            ref={node => (this.listname = node)}
            placeholder="Add a list..."
            className="AddListInput"
          />
        </div>
        <InputListButton
          onClick={() => {
            this.props.showList();
            this.props.addListName(this.listname.value);
          }}
        />
      </div>
    );
  }
}

export default AddListInput;
