import React from "react";
import styled from "styled-components";

const ListNameContainer = styled.div`
  height: 40px;
  border-radius: 5px;
  background-color: rgba(121, 165, 234, 0.2);
  cursor: pointer;
  overflow: auto;
  margin: 10px;
  &:hover {
    background-color: rgba(121, 165, 234, 0.5);
  }
  &:hover .ButtonText {
    color: #300c1b;
  }
`;

const Text = styled.p`
  font-family: "Nunito Sans", sans-serif;
  margin: 10px;
  color: white;
  font-weight: 900;
  text-align: left;
  font-size: 15px;
`;

const AddListButton = props => {
  return (
    <ListNameContainer onClick={props.onClick}>
      <Text className="ButtonText">Add a list...</Text>
    </ListNameContainer>
  );
};

export default AddListButton;
