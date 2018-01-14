import React, { Component } from "react";

class AddListButton extends Component {
  render() {
    return (
      <div onClick={this.props.onClick} className="AddListContainer">
        <div className="AddListText">Add a list...</div>
      </div>
    );
  }
}

export default AddListButton;
