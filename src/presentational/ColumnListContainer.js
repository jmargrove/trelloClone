import React, { Component } from "react";
import styled from "styled-components";

const ColumnListContainer = styled.div`
  margin-top: 10px;
  width: 270px;
  margin-left: 5px;
  margin-right: 5px;
`;

const ColumnListContainer = () => {
  return <Column>{this.props.children}</Column>;
};

export default ColumnListContainer;
