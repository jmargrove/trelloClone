import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 5px;
  background-color: rgba(121, 165, 234, 0.2);
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: rgba(121, 165, 234, 0.5);
  }
  &:hover .ButtonText {
    color: #300c1b;
  }
`;

const Text = styled.p`
  font-family: "Nunito Sans", sans-serif;
  margin-left: 10px;
  color: white;
  text-align: left;
`;

const AddListButton = props => {
  return (
    <Container onClick={props.onClick}>
      <Text className="ButtonText">Add a list...</Text>
    </Container>
  );
};

export default AddListButton;
