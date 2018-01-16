import React, { Component } from "react";
import AddListButton from "./AddListButton.js";
import AddListInput from "./AddListInput.js";
import List from "./List.js";

class ItemColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputBoxVisable: false,
      listname: null,
      addedNewList: false
    };
  }

  viewInputBox = () => {
    this.setState({ inputBoxVisable: true });
  };

  addNewNameToList = newName => {
    this.setState({ listname: newName });
  };

  showList = () => {
    this.setState({ addedNewList: true });
  };

  RemoveList = () => {
    this.setState({
      addedNewList: false,
      listname: null,
      inputBoxVisable: false
    });
  };

  renderColumnsList() {
    return (
      <div className="ColumnForList">
        {this.state.inputBoxVisable ? (
          this.state.addedNewList ? (
            <List removeList={this.RemoveList} listName={this.state.listname} />
          ) : (
            <AddListInput
              showList={this.showList}
              addListName={this.addNewNameToList}
            />
          )
        ) : (
          <AddListButton onClick={this.viewInputBox} />
        )}
      </div>
    );
  }

  render() {
    console.log("this state ......", this.state);
    return <div>{this.renderColumnsList()}</div>;
  }
}

export default ItemColumn;
