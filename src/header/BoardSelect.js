import React, { Component } from "react";
import styled from "styled-components";
import { Container, CloneLogoBar } from "./StyledComponents.js";

class BoardSelect extends Component {
  render() {
    const styles = this.props.style;
    console.log("styles", styles);
    return (
      <Container
        style={{
          width: "90px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          ...styles
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
        <div
          style={{
            color: "white",
            height: "15px",
            fontWeight: "bold",
            fontFamily: '"Nunito Sans", sans-serif;'
          }}
        >
          Boards
        </div>
      </Container>
    );
  }
}

export default BoardSelect;