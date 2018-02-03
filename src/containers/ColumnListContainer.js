import React, { Component } from "react";
import styled from "styled-components";

const Column = styled.div`
  margin-top: 10px;
  width: 270px;
  margin-left: 5px;
  margin-right: 5px;
`;

class ColumnListContainer extends Component {
  render() {
    return <Column>{this.props.children}</Column>;
  }
}

export default ColumnListContainer;
