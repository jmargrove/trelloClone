import React from "react";
import SquareButton from "./InputListButton.js";
import styled from "styled-components";

const AddListInput = props => {
  return (
    <ListContainer>
      <ListNameContainer>
        <ListNameInput
          autoFocus={true}
          innerRef={comp => (this.input = comp)}
          placeholder="Add a list..."
        />
      </ListNameContainer>
      <SquareButton
        symbol="+"
        onClick={() => {
          props.showList();
          props.addListName(this.input.value);
        }}
      />
    </ListContainer>
  );
};

const ListContainer = styled.div`
  border-radius: 5px;
  background-color: rgba(121, 165, 234, 0.2);
  overflow: auto;
`;

const ListNameContainer = styled.div`
  border-radius: 5px;
  background-color: rgba(121, 165, 234, 0.5);
  height: 40px;
  overflow: auto;
  margin: 10px;
`;

const ListNameInput = styled.input`
  display: block;
  height: 22px;
  width: 230px;
  background-color: transparent;
  border: none;
  font-family: "Nunito Sans", sans-serif;
  font-size: 15px;
  color: #300c1b;
  overflow: none;
  margin: 10px;
`;

export default AddListInput;
