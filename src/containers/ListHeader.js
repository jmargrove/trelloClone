import React, { Component } from "react";
import AddListButton from "./AddListButton";
import AddListInput from "./AddListInput";
import ListTitle from "./ListTitle";
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
    return <ListTitle listTitle={this.state.listTitle} />;
  };

  render() {
    return <div>{this.switchHandler()}</div>;
  }
}

export default ListHeader;
