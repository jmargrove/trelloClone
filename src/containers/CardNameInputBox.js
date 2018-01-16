import React, { Component } from "react";
// import addListButton from "./addListButton.js";
class CardNameInputBox extends Component {
  render() {
    console.log("this is the props", this.props);
    return (
      <div className="AddACardContainer">
        <input placeholder="Add card..." />
        <addListButton />
      </div>
    );
  }
}

export default CardNameInputBox;
