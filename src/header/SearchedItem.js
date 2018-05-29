import React, { Component } from "react";
import styled from "styled-components";

const SearchItemContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 75px;
  background-color: blue;
  ${"" /* border: solid; */}
  border-radius: 5px;
  border-color: black
  border-width: thin;
`;

const SearchItem = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 50px;
  background-color: orange;
  border-radius: 5px;
  border-color: black
  border-width: thin;
  transition: height 200ms 0ms,  width 200ms 0ms;
`;

class SearchedItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onHover: false
    };
  }

  hoverHandler = () => {
    this.setState((prevState, props) => {
      return { onHover: !this.state.onHover };
    });
  };
  render() {
    console.log("onHover:", this.state.onHover);
    return (
      <SearchItemContainer>
        <SearchItem
          style={{
            width: this.state.onHover ? "200px" : "170px",
            height: this.state.onHover ? "75px" : "50px"
          }}
          onMouseEnter={this.hoverHandler}
          onMouseLeave={this.hoverHandler}
        >
          <p>{this.props.children}</p>
        </SearchItem>
      </SearchItemContainer>
    );
  }
}

export default SearchedItem;
