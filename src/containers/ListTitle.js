import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
const ListNameContainer = styled.div`
  border-radius: 5px;
  background-color: rgba(121, 165, 234, 0.5);
  height: 40px;
  overflow: auto;
  margin: 10px;
  cursor: pointer;
`;

const Text = styled.p`
  font-family: "Nunito Sans", sans-serif;
  margin: 10px;
  font-weight: 900;
  text-align: left;
  font-size: 15px;
`;

class ListTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectCol: false
    };
  }
  render() {
    return (
      <ListNameContainer
        ref={el => (this.i = el)}
        style={{
          backgroundColor: this.state.selectCol
            ? "rgba(121, 165, 234, 0.1)"
            : "rgba(121, 165, 234, 0.5)"
        }}
        onClick={() =>
          this.setState(prevState => {
            return { selectCol: !prevState.selectCol };
          })}
      >
        <Text>{this.props.listTitle}</Text>
      </ListNameContainer>
    );
  }
}

export default ListTitle;
