import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { boardUpdate, createNewBoard } from "./../actions";

const mapStateToProps = state => ({
  boardTitles: state.boardTitles
});

const mapDispatchToProps = dispatch => ({
  changeBoard: bObj => dispatch(boardUpdate(bObj)),
  newBoard: () => dispatch(createNewBoard())
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
  handleFetch = (boardTitle: string) => {
    boardTitle = boardTitle.replace(/\s/g, "");
    console.log(boardTitle);
    console.log("fetching");
    fetch(
      `https://private-2741f-trelloclone.apiary-mock.com/t03jam8/${boardTitle}`
    )
      .then(r => r.json())
      .then(res => this.props.changeBoard(res));
  };

  render() {
    return (
      <PopUpWindowWrapper onClickOut={() => console.log("Blur")}>
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
            <YourBoards
              key={el}
              onClick={() => {
                this.handleFetch(el);
                this.props.toggleHandler();
              }}
            >
              <div>{el}</div>
            </YourBoards>
          );
        })}
        <YourBoards
          onClick={() => {
            this.props.newBoard();
            this.props.toggleHandler();
          }}
        >
          <p>new board?</p>
        </YourBoards>
      </PopUpWindowWrapper>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardsSelection);
