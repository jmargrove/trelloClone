import React, { Component } from "react";
import styled from "styled-components";
import MagnifyIcon from "mdi-react/MagnifyIcon";
const HeaderBanner = styled.div`
  width: 100vw;
  height: 40px;
  background: linear-gradient(to right, #79a5ea, #300c1b);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const Container = styled.div`
  height: 30px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }
`;

const Wrapper = styled.div`
  height: 30px;
  background-color: transparent;
  display: flex;
  flex-direction: rows;
  justify-content: space-around;
  align-items: center;
`;

class Header extends Component {
  render() {
    return (
      <HeaderBanner>
        <Wrapper style={{ width: "295px" }}>
          <Container
            style={{
              width: "90px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around"
            }}
          >
            <div
              style={{
                fontSize: "15px",
                width: "15px",
                height: "15px",
                backgroundColor: "white",
                display: "flex",
                borderRadius: "2px"
              }}
            >
              <CloneLogoBar
                style={{ height: "12px", width: "5px", margin: "1px" }}
              />
              <CloneLogoBar
                style={{ height: "10px", width: "5px", margin: "1px" }}
              />
              <CloneLogoBar
                style={{ height: "8px", width: "5px", margin: "1px" }}
              />
            </div>
            <p
              style={{
                color: "white",
                height: "15px",
                fontWeight: "bold",
                fontFamily: '"Nunito Sans", sans-serif;'
              }}
            >
              Boards
            </p>
          </Container>
          <Container style={{ width: "180px" }}>
            <input type="text" />
            <MagnifyIcon />
          </Container>
        </Wrapper>
        <Wrapper>
          <CloneLogo className="cloneLogo">
            <CloneLogoBar />
            <CloneLogoBar style={{ height: "20px" }} />
            <CloneLogoBar style={{ height: "10px" }} />
          </CloneLogo>
          <h1> trelloClone</h1>
        </Wrapper>
        <Wrapper style={{ width: "160px" }}>
          <Container style={{ width: "30px" }} />
          <Container style={{ width: "30px" }} />
          <Container style={{ width: "30px" }} />
          <Container style={{ width: "30px", borderRadius: "15px" }} />
        </Wrapper>
      </HeaderBanner>
    );
  }
}

export default Header;
