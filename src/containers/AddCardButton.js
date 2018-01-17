import React, { Component } from "react";

class AddCardButton extends Component {
  render() {
    console.log("this is the props", this.props);
    return (
      <div
        onClick={() => this.props.showCardNameInput()}
        className="AddACardContainer"
      >
        <div className="AddACardtext"> Add a card...</div>
      </div>
    );
  }
}

export default AddCardButton;
