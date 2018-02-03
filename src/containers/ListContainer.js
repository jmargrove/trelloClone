import React, { Component } from "react";
import styled from "styled-components";

const List = styled.div`
  border-radius: 5px;
  background-color: rgba(121, 165, 234, 0.2);
  overflow: auto;
  min-width: 100%;
  min-height: 45px;
`;

class ListContainer extends Component {
  render() {
    return <List>{this.props.children}</List>;
  }
}

export default ListContainer;
