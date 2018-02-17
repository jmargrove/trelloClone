import React, { Component } from "react";
import styled from "styled-components";

const PopUpWindowWrapper = styled.div`
  position: absolute;
  top: 42px;
  left: 0;
  width: 280px;
  min-height: 500px;
  max-height: 750px;
  padding: 10px;
  border-radius: 5px;
  background-color: #e2e9f6;
  border: solid;
  border-width: thin;
  border-color: #b2c7ee;
  box-shadow: 2px 2px rgba(178, 199, 238, 0.5);
`;

class BoardsSelection extends Component {
  render() {
    return <PopUpWindowWrapper />;
  }
}

export default BoardsSelection;
