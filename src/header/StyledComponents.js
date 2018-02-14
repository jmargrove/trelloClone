import styled from "styled-components";

export const Container = styled.div`
  height: 30px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.75);
  }
  &:hover .MagnifyIcon {
    fill: "white";
  }
`;

export const CloneLogoBar = styled.div`
  flex: 1;
  margin: 2px;
  background-color: #300c1b;
  border-radius: 2px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const Wrapper = styled.div`
  height: 30px;
  background-color: transparent;
  display: flex;
  flex-direction: rows;
  justify-content: space-around;
  align-items: center;
`;

export const HeaderBanner = styled.div`
  width: 100vw;
  height: 40px;
  background: linear-gradient(to right, #79a5ea, #300c1b);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CloneLogo = styled.div`
  height: 30px;
  width: 30px;
  background-color: white;
  display: flex;
  flex-direction: row;
  border-radius: 5px;
`;
