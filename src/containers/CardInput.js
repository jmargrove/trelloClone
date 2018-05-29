import React, { Component } from "react";
import AddCardButton from "./../presentational/AddCardButton";
import CardNameInputBox from "./CardNameInputBox";

class CardInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleInput: "Button"
    };
  }

  switchHandler = () => {
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
            listTitle={this.props.listTitle}
            onClick={() => {
              this.setState({ toggleInput: "Button" });
            }}
            closeInputBox={() => {
              this.setState({ toggleInput: "Button" });
            }}
          />
        );
      default:
        return null;
    }
  };

  render() {
    return <div>{this.switchHandler()}</div>;
  }
}

export default CardInput;
