import React, { Component } from "react";
// import styled from "styled-components";
import { Container, CloneLogoBar } from "./StyledComponents.js";
import BoardsSelection from "./BoardsSelection.js";

class BoardSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleBoardsSelection: false
    };
  }

  toggleHandler = () => {
    this.setState(prevState => {
      return { toggleBoardsSelection: !prevState.toggleBoardsSelection };
    });
  };

  render() {
    const styles = this.props.style;
    console.log("styles", styles);
    return (
      <div>
        {this.state.toggleBoardsSelection ? (
          <BoardsSelection toggleHandler={this.toggleHandler} />
        ) : null}
        <Container
          onClick={() => {
            this.setState(prevState => {
              return {
                toggleBoardsSelection: !prevState.toggleBoardsSelection
              };
            });
          }}
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
              fontFamily: '"Nunito Sans", "sans-serif"'
            }}
          >
            Boards
          </div>
        </Container>
      </div>
    );
  }
}

export default BoardSelect;
