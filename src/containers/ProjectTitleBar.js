import React, { Component } from "react";
import styled from "styled-components";

const HeaderBanner = styled.div`
  width: 100vw;
  height: 40px;
  background: linear-gradient(to right, #79a5ea, #300c1b);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: flex-start;
  background: transparent;
`;

const ProjectTitleText = styled.div`
  font-size: 25px;
  font-family: "Nunito Sans", sans-serif;
  margin-left: 20px;
`;

class ProjectTitleBar extends Component {
  render() {
    return (
      <HeaderBanner>
        <ProjectTitleText> the project title</ProjectTitleText>
      </HeaderBanner>
    );
  }
}

export default ProjectTitleBar;
