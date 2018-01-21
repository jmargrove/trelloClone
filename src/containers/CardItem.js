import React from "react";
import styled from "styled-components";

const CardItemContainer = styled.div`
  margin: 10px;
  padding: 10px;
  margin-top: 0;
  background-color: white;
  border-radius: 6px;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
`;

const CardItemText = styled.div`
  font-size: 15px;
  font-family: "Nunito Sans", sans-serif;
`;

const CardItem = props => {
  return (
    <div style={{ overflow: "auto" }}>
      <CardItemContainer>
        <CardItemText>{props.children}</CardItemText>
      </CardItemContainer>
    </div>
  );
};

export default CardItem;
