import React, { Component } from "react";
import styled from "styled-components";

const Header = styled.div`
  border-radius: 5px;
  background-color: rgba(121, 165, 234, 0.5);
  height: 40px;
  overflow: auto;
  margin: 10px;
  cursor: pointer;
`;

const Title = styled.p`
  font-family: "Nunito Sans", sans-serif;
  margin: 10px;
  font-weight: 900;
  text-align: left;
  font-size: 15px;
`;

const ListTitle = () => {
  const title = this.props.children;
  return (
    <Header>
      <Title>{title}</Title>
    </Header>
  );
};

export default ListTitle;
