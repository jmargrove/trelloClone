import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { moveItem } from "./../actions";

const CardItemContainer = styled.div`
  margin: 10px;
  padding: 10px;
  margin-top: 0;
  background-color: white;
  border-radius: 6px;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
`;

const CardItemText = styled.div`
  font-size: 15px;
  font-family: "Nunito Sans", sans-serif;
`;

const mapDispatchToProps = dispatch => ({
  moveCard: id => dispatch(moveItem(id))
});

class CardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }
  render() {
    return (
      <div style={{ overflow: "auto" }}>
        <CardItemContainer
          onClick={() => {
            this.props.moveCard(this.props.id);
            this.setState((prevState, props) => {
              return {
                selected: !prevState.selected
              };
            });
          }}
          style={{
            backgroundColor: this.state.selected ? "#dfdfdf" : "white"
          }}
        >
          <CardItemText>{this.props.children}</CardItemText>
        </CardItemContainer>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(CardItem);
