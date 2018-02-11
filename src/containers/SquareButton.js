import React, { Component } from "react";
import styled from "styled-components";
import CheckCircleOutlineIcon from "mdi-react/CheckCircleOutlineIcon";
import CloseIcon from "mdi-react/CloseIcon";
const InputListButtonContainer = styled.div`
  width: 35px;
  height: 35px;
  border: solid;
  border-width: thin;
  border-radius: 3px;
  border-color: rgba(121, 165, 234, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  cursor: pointer;
  margin-bottom: 5px;
  &:hover {
    background-color: rgba(121, 165, 234, 0.5);
    border-color: #ffffff;
  }
  &:hover .InputListButtonText {
    color: #ffffff;
  }
`;

class SquareButton extends Component {
  render() {
    return (
      <InputListButtonContainer onClick={this.props.onClick}>
        {this.props.closeToggle ? <CloseIcon /> : <CheckCircleOutlineIcon />}
      </InputListButtonContainer>
    );
  }
}

export default SquareButton;
