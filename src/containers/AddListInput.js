import React, { Component } from "react";
import SquareButton from "./../presentational/SquareButton.js";
import styled from "styled-components";
import { connect } from "react-redux";
import { passListTitle } from "../actions";

const mapDispatchToProps = dispatch => ({
  passListTitle: (listTitle: string) => dispatch(passListTitle(listTitle))
});

class AddListInput extends Component {
  render() {
    return (
      <div>
        <ListNameContainer>
          <ListNameInput
            autoFocus={true}
            innerRef={comp => (this.input = comp)}
            placeholder="Add a list..."
          />
        </ListNameContainer>
        <div style={{ display: "flex", flexDirection: "rows" }}>
          <SquareButton
            closeToggle={false}
            onClick={() => {
              this.props.passListTitle(this.input.value);
              this.props.onClick();
            }}
          />
          <SquareButton
            closeToggle={true}
            onClick={() => {
              // this.props.passListTitle(this.input.value);
              this.props.onClick();
            }}
          />
        </div>
      </div>
    );
  }
}

const ListNameContainer = styled.div`
  border-radius: 5px;
  background-color: rgba(121, 165, 234, 0.5);
  height: 40px;
  overflow: auto;
  margin: 10px;
`;

const ListNameInput = styled.input`
  display: block;
  height: 20px;
  width: 230px;
  background-color: transparent;
  border: none;
  font-family: "Nunito Sans", sans-serif;
  font-size: 15px;
  color: #300c1b;
  overflow: auto;
  margin: 10px;
  font-weight: 900;
`;

export default connect(null, mapDispatchToProps)(AddListInput);
