import React, { Component } from "react";
import AddCardButton from "./AddCardButton";
import CardNameInputBox from "./CardNameInputBox";

class CardInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleInput: "Button"
    };
  }

  switchHandler() {
    switch (this.state.toggleInput) {
      case "Button":
        return (
          <AddCardButton
            onClick={() => this.setState({ toggleInput: "Input" })}
          />
        );
      case "Input":
        return (
          <CardNameInputBox
            addingToTheCardlist={this.props.addingToTheCardlist}
            onClick={() => this.setState({ toggleInput: "Button" })}
          />
        );
    }
  }

  render() {
    return <div>{this.switchHandler()}</div>;
  }
}

export default CardInput;
