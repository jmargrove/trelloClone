import React from "react";
import styled from "styled-components";

const AddACardContainer = styled.div`
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: rgba(121, 165, 234, 0.5);
  }
  &:hover .AddACardtext {
    color: white;
  }
`;

const AddACardtext = styled.div`
  margin-left: 10px;
  color: #300c1b;
  font-size: 15px;
  font-family: "Nunito Sans", sans-serif;
`;

const AddCardButton = props => {
  return (
    <AddACardContainer onClick={() => props.onClick()}>
      <AddACardtext className="AddACardtext"> Add a card...</AddACardtext>
    </AddACardContainer>
  );
};

export default AddCardButton;
