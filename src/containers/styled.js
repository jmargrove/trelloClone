import styled from "styled-components";

const ListContainer = styled.div`
  border-radius: 5px;
  background-color: rgba(121, 165, 234, 0.2);
  overflow: auto;
  min-width: 100%;
  min-height: 45px;
`;

const ColumnListContainer = styled.div`
  margin-top: 10px;
  width: 270px;
  height: 800px;
  background-color: green;
`;

export { ListContainer, ColumnListContainer };
