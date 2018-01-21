import React, { Component } from "react";
import AddListButton from "./AddListButton";
import AddListInput from "./AddListInput";
import AddListTitle from "./AddListTitle";
// so this component will show either the button, input or the ListTitle

class ListHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonInputTitle: "Button",
      listTitle: "to do list..."
    };
  }

  addListTitle = newTitle => {
    this.setState({ listTitle: newTitle });
  };

  clickHandler = () => {
    this.props.addedTitle();
    this.setState({ buttonInputTitle: "Title" });
  };

  switchHandler = () => {
    switch (this.state.buttonInputTitle) {
      case "Button":
        return (
          <AddListButton
            onClick={() => this.setState({ buttonInputTitle: "Input" })}
          />
        );
      case "Input":
        return (
          <AddListInput
            addListTitle={this.addListTitle}
            onClick={this.clickHandler}
          />
        );
      case "Title":
        return <AddListTitle listTitle={this.state.listTitle} />;
    }
  };

  render() {
    return <div>{this.switchHandler()}</div>;
  }
}

export default ListHeader;
