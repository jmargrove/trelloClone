import React, { Component } from "react";
// import styled from "styled-components";
import BoardSelect from "./BoardSelect";
import Search from "./Search";
import PlusIcon from "mdi-react/PlusIcon";
import AlarmIcon from "mdi-react/AlarmIcon";
import InformationOutlineIcon from "mdi-react/InformationOutlineIcon";
// import SearchPopUp from "./SearchPopUp";
import {
  Container,
  CloneLogoBar,
  Wrapper,
  HeaderBanner,
  CloneLogo
} from "./StyledComponents.js";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleSearch: false
    };
  }

  render() {
    return (
      <HeaderBanner>
        <Wrapper style={{ flex: 1, justifyContent: "flex-start" }}>
          <Wrapper style={{ justifyContent: "flex-start" }}>
            <BoardSelect style={{ marginLeft: "10px" }} />
            <Search style={{ marginLeft: "10px" }} />
          </Wrapper>
        </Wrapper>
        <Wrapper style={{ alignSelf: "center", flex: 0.2 }}>
          <CloneLogo className="cloneLogo">
            <CloneLogoBar />
            <CloneLogoBar style={{ height: "20px" }} />
            <CloneLogoBar style={{ height: "10px" }} />
          </CloneLogo>
          <h1> trelloClone</h1>
        </Wrapper>
        <Wrapper style={{ flex: 1, justifyContent: "flex-end" }}>
          <Wrapper style={{ width: "160px" }}>
            <Container style={{ width: "30px" }}>
              <PlusIcon style={{ width: "20px", height: "20px" }} />
            </Container>
            <Container style={{ width: "30px" }}>
              <InformationOutlineIcon
                style={{ width: "20px", height: "20px" }}
              />
            </Container>
            <Container style={{ width: "30px" }}>
              <AlarmIcon style={{ width: "20px", height: "20px" }} />
            </Container>
            <Container style={{ width: "30px", borderRadius: "15px" }}>
              <p>JM</p>
            </Container>
          </Wrapper>
        </Wrapper>
      </HeaderBanner>
    );
  }
}

export default Header;
