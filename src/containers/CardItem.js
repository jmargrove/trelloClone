import React, { Component } from "react";
import CardOptionsButton from "./CardOptionsButton.js";
class CardItem extends Component {
  render() {
    return (
      <div className="CardItemContainer">
        <div className="CardItem">
          <CardOptionsButton />
          <div className="CardItemText">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default CardItem;
