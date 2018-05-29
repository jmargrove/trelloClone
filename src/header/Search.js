import React, { Component } from "react";
import styled from "styled-components";
// import { connect } from "react-redux";
import MagnifyIcon from "mdi-react/MagnifyIcon";
import OpenInNewIcon from "mdi-react/OpenInNewIcon";
import { Container } from "./StyledComponents.js";
// import SquareButton from "./../presentational/SquareButton";
import CloseIcon from "mdi-react/CloseIcon";
import SearchPopUp from "./SearchPopUp";

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
      toggleSearch: false,
      searchTerm: null
    };
  }

  handleFieldChange = (event: object) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleOnBlur = () => {
    console.log("on blur handle");
    this.setState({ toggleSearch: false });
  };

  toggleSearch = () => {
    switch (this.state.toggleSearch) {
      case true:
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
              style={{ marginLeft: "10px", backgroundColor: "white" }}
              className="inputAnimate"
              onChange={this.handleFieldChange}
            />
            <OpenInNewIcon style={{ marginRight: "5px" }} />
            <CloseIcon
              style={{ marginRight: "5px" }}
              onClick={() => {
                this.setState(prevState => {
                  return { toggleSearch: !prevState.toggleSearch };
                });
              }}
            />
          </Container>
        );
      case false:
        return (
          <Container
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
      default:
        return null;
    }
  };

  render() {
    console.log("searching ", this.state.searchTerm);
    return (
      <div>
        {this.state.toggleSearch ? (
          <SearchPopUp
            searchTerm={this.state.searchTerm}
            handleOnBlur={this.handleOnBlur}
          />
        ) : null}
        {this.toggleSearch()}
      </div>
    );
  }
}

export default Search;
