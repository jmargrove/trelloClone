import React, { Component } from "react";

class CardItem extends Component {
  render() {
    return (
      <div className="CardItemContainer">
        <div className="CardItem">
          <div className="CardItemText">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default CardItem;
