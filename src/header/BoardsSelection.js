import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  boardTitles: state.boardTitles
});

const PopUpWindowWrapper = styled.div`
  position: absolute;
  top: 42px;
  left: 2px;
  width: 220px;
  border-radius: 5px;
  background-color: #e2e9f6;
  border: solid;
  border-width: thin;
  border-color: #b2c7ee;
  box-shadow: 2px 2px rgba(178, 199, 238, 0.5);
`;

const YourBoards = styled.div`
  width: 200px;
  height: 30px;
  background-color: white;
  margin: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: rgba(178, 199, 238, 0.5);
  }
`;

class BoardsSelection extends Component {
  handleFetch = () => {
    console.log("fetching");
    fetch("https://private-2741f-trelloclone.apiary-mock.com/personalwork")
      .then(r => r.json())
      .then(res => console.log(res));
  };

  render() {
    return (
      <PopUpWindowWrapper>
        <div
          style={{
            width: 200,
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "10px",
            borderBottom: "solid",
            borderWidth: "thin"
          }}
        >
          <h3>Your Boards</h3>
        </div>
        {this.props.boardTitles.map(el => {
          return (
            <YourBoards onClick={() => this.handleFetch(el)}>
              <div>{el}</div>
            </YourBoards>
          );
        })}
      </PopUpWindowWrapper>
    );
  }
}

export default connect(mapStateToProps, null)(BoardsSelection);
