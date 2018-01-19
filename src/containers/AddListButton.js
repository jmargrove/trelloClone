import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 5px;
  background-color: rgba(121, 165, 234, 0.2);
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: center;
`;

const Text = styled.p`
  font-family: "Nunito Sans", sans-serif;
  margin-left: 10px;
  color: white;
  text-align: left;
`;

const AddListButton = props => {
  console.log(props);
  return (
    <Container onClick={props.onClick}>
      <Text>Add a list...</Text>
    </Container>
  );
};

export default AddListButton;
