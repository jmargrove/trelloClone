import React, { Component } from "react";
import styled from "styled-components";

const ListNameContainer = styled.div`
  border-radius: 5px;
  background-color: rgba(121, 165, 234, 0.5);
  height: 40px;
  overflow: auto;
  margin: 10px;
`;

const Text = styled.p`
  font-family: "Nunito Sans", sans-serif;
  margin: 10px;
  color: "#300c1b";
  font-weight: bold;
  text-align: left;
  font-size: 15px;
`;

class AddListTitle extends Component {
  render() {
    console.log(this.props);
    return (
      <ListNameContainer>
        <Text>{this.props.listTitle}</Text>
      </ListNameContainer>
    );
  }
}

export default AddListTitle;
