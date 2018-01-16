import React, { Component } from "react";
import RemoveButton from "./RemoveButton";
import AddCardButton from "./AddCardButton.js";
import CardNameInputBox from "./CardNameInputBox.js";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCardNameInput: false,
      cardname: null
    };
  }

  addCardName = newCardName => {
    this.setState({ cardname: newCardName });
  };

  showCardNameInput = () => {
    this.setState({ showCardNameInput: true });
  };

  render() {
    console.log("this is the props", this.props);
    return (
      <div className="ListContainer">
        <div className="ListTitleContainer">
          <div className="ListTitle">{this.props.listName}</div>
          <RemoveButton removeList={this.props.removeList} />
        </div>
        {this.state.showCardNameInput ? (
          <CardNameInputBox />
        ) : (
          <AddCardButton showCardNameInput={this.showCardNameInput} />
        )}
      </div>
    );
  }
}

export default List;
