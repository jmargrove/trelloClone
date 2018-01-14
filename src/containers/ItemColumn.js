import React, { Component } from "react";
import AddListButton from "./AddListButton.js";
import AddListInput from "./AddListInput.js";

class ItemColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputBoxVisable: false
    };
  }

  viewInputBox = () => {
    this.setState({ inputBoxVisable: true });
  };

  render() {
    return (
      <div className="ColumnForList">
        {this.state.inputBoxVisable ? (
          <AddListInput />
        ) : (
          <AddListButton onClick={this.viewInputBox} />
        )}
      </div>
    );
  }
}

export default ItemColumn;
