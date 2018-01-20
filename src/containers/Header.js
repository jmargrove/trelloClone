import React from "react";
import styled from "styled-components";

const HeaderBanner = styled.div`
  width: 100vw;
  height: 40px;
  background: linear-gradient(to right, #79a5ea, #300c1b);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CloneLogo = styled.div`
  height: 30px;
  width: 30px;
  background-color: white;
  display: flex;
  flex-direction: row;
  border-radius: 5px;
`;

const CloneLogoBar = styled.div`
  flex: 1;
  margin: 2px;
  background-color: #300c1b;
  border-radius: 2px;
`;

const Header = props => {
  return (
    <HeaderBanner>
      <CloneLogo className="cloneLogo">
        <CloneLogoBar />
        <CloneLogoBar style={{ height: "20px" }} />
        <CloneLogoBar style={{ height: "10px" }} />
      </CloneLogo>
      <h1> trelloClone</h1>
    </HeaderBanner>
  );
};

export default Header;
