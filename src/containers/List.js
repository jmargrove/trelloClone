import React, { Component } from "react";
import RemoveButton from "./RemoveButton";
import AddCardButton from "./AddCardButton.js";
import CardNameInputBox from "./CardNameInputBox.js";
import CardItem from "./CardItem.js";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCardNameInput: false,
      cardname: []
    };
  }

  addCardName = newCardName => {
    this.setState((prevState, props) => {
      prevState.cardname.push(newCardName);
      return { cardname: prevState.cardname };
    });
  };

  showCardNameInput = () => {
    this.setState((prevState, props) => {
      return { showCardNameInput: !prevState.showCardNameInput };
    });
  };

  /// function to map the card items
  mapCardItems = () => {
    return this.state.cardname.map(el => {
      return <CardItem>{el}</CardItem>;
    });
  };

  render() {
    console.log("this is the props", this.props);
    return (
      <div className="ListContainer">
        <div className="ListTitleContainer">
          <div className="ListTitle">{this.props.listName}</div>
          <RemoveButton removeList={this.props.removeList} />
        </div>
        {this.mapCardItems()}
        {this.state.showCardNameInput ? (
          <CardNameInputBox
            showAddCardButton={this.showCardNameInput}
            addCardName={this.addCardName}
          />
        ) : (
          <AddCardButton showCardNameInput={this.showCardNameInput} />
        )}
      </div>
    );
  }
}

export default List;
