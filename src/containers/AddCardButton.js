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

const styles = {
  height: "40px",
  display: "flex",
  "justify-content": "flex-start",
  "align-items": "center",
  cursor: "pointer"
};

export default AddCardButton;
