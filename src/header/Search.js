import React, { Component } from "react";
import styled from "styled-components";
import MagnifyIcon from "mdi-react/MagnifyIcon";
import OpenInNewIcon from "mdi-react/OpenInNewIcon";
import { Container } from "./StyledComponents.js";
import SquareButton from "./../containers/SquareButton";
import CloseIcon from "mdi-react/CloseIcon";

const Input = styled.input`
  display: block;
  height: 20px;
  background-color: transparent;
  border: none;
  width: 280px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 15px;
  color: #300c1b;
  overflow: auto;
`;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleSearch: false
    };
  }
  toggleSearch = () => {
    switch (this.state.toggleSearch) {
      case "Expand":
        return (
          <Container
            className="inputAnimate"
            style={{
              width: "280px",
              backgroundColor: "white",
              ...this.props.style
            }}
          >
            <Input
              autoFocus={true}
              style={{ marginLeft: "10px" }}
              className="inputAnimate"
            />
            <OpenInNewIcon style={{ marginRight: "5px" }} />
            <CloseIcon
              style={{ marginRight: "5px" }}
              onClick={() => {
                this.setState(prevState => {
                  return { toggleSearch: "Retract" };
                });
              }}
            />
          </Container>
        );
      case "Retract":
        return (
          <Container
            className="inputRetract"
            onClick={() => {
              this.setState(prevState => {
                return { toggleSearch: !prevState.toggleSearch };
              });
            }}
            style={{
              width: "180px",
              justifyContent: "flex-end",
              cursor: "text",
              ...this.props.style
            }}
          >
            <MagnifyIcon style={{ marginRight: "10px", color: "white" }} />
          </Container>
        );
      case false:
        return (
          <Container
            onClick={() => {
              this.setState(prevState => {
                return { toggleSearch: "Expand" };
              });
            }}
            style={{
              width: "180px",
              justifyContent: "flex-end",
              cursor: "text",
              ...this.props.style
            }}
          >
            <MagnifyIcon style={{ marginRight: "10px", color: "white" }} />
          </Container>
        );
      default:
        null;
    }
  };

  render() {
    return <div>{this.toggleSearch()}</div>;
  }
}

export default Search;
