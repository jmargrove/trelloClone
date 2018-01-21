import React from "react";
import CardOptionsButton from "./CardOptionsButton.js";
import styled from "styled-components";

const CardItemContainer = styled.div`
  margin: 10px;
  margin-top: 5px;
  padding: 10px;
  background-color: white;
  border-radius: 6px;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
`;

const CardItemText = styled.div`
  font-size: 15px;
  color: black;
  text-align: left;
`;

const CardItem = props => {
  return (
    <div style={{ overflow: "auto" }}>
      <CardItemContainer>
        <CardOptionsButton />
        <CardItemText>{props.children}</CardItemText>
      </CardItemContainer>
    </div>
  );
};

export default CardItem;
