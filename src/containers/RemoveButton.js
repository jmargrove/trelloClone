import React, { Component } from "react";

class RemoveButton extends Component {
  render() {
    console.log("this is the props", this.props);
    return (
      <div
        onClick={() => this.props.removeList()}
        className="RemoveButtonContainer"
      >
        <div className="RemoveButtonSymbol">X</div>
      </div>
    );
  }
}

export default RemoveButton;
