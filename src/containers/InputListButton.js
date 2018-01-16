import React, { Component } from "react";

class InputListButton extends Component {
  render() {
    return (
      <div onClick={this.props.onClick} className="InputListButtonContainer">
        <div className="InputListButtonText">+</div>
      </div>
    );
  }
}

export default InputListButton;
