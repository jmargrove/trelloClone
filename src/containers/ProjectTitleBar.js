import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import StarOutlineIcon from "mdi-react/StarOutlineIcon";
import LockOutlineIcon from "mdi-react/LockOutlineIcon";

const mapStateToProps = state => ({
  boardTitle: state.boardTitle[0]
});
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
  font-size: 20px;
  font-family: "Nunito Sans", sans-serif;
  font-weight: bold;
  margin: 10px;
`;

const Container = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: rgba(178, 199, 238, 0.75);
  }
  margin-left: 5px;
  margin-left: 5px;
`;

class ProjectTitleBar extends Component {
  render() {
    return (
      <HeaderBanner>
        <Container>
          <ProjectTitleText> {this.props.boardTitle} </ProjectTitleText>
        </Container>
        <Container style={{ width: "30px" }}>
          <StarOutlineIcon style={{ width: "15px", height: "15px" }} />
        </Container>
        <div style={{ margin: "2px", fontSize: "25px", color: "grey" }}>|</div>
        <Container style={{ width: "60px" }}>
          <div style={{ fontSize: "12px" }}>Personal</div>
        </Container>
        <div style={{ margin: "2px", fontSize: "25px", color: "grey" }}>|</div>
        <Container style={{ width: "70px" }}>
          <LockOutlineIcon style={{ width: "15px" }} />
          <div style={{ fontSize: "12px" }}> Private</div>
        </Container>
      </HeaderBanner>
    );
  }
}

export default connect(mapStateToProps, null)(ProjectTitleBar);
