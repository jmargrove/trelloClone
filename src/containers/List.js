import React, { Component } from "react";
import RemoveButton from "./RemoveButton";
class List extends Component {
  render() {
    console.log("this is the props", this.props);
    return (
      <div className="ListContainer">
        <div className="ListTitleContainer">
          <div className="ListTitle">{this.props.listName}</div>
          <RemoveButton removeList={this.props.removeList} />
        </div>
        <div className="AddACardContainer">
          <div className="AddACardtext"> add a card...</div>
        </div>
      </div>
    );
  }
}

export default List;
