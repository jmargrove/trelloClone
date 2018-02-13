import React, { Component } from "react";
import styled from "styled-components";

const PopUpWindowWrapper = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: "black";
`;

class SearchPopUp extends Component {
  render() {
    return <PopUpWindowWrapper>search pannel</PopUpWindowWrapper>;
  }
}

export default SearchPopUp;
