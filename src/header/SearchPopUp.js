import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import SearchedItem from "./SearchedItem.js";

const PopUpWindowWrapper = styled.div`
  position: absolute;
  top: 42px;
  left: 110px;
  width: 600px;
  min-height: 220px;
  max-height: 750px;
  padding: 10px;
  border-radius: 5px;
  background-color: #e2e9f6;
  border: solid;
  border-width: thin;
  border-color: #b2c7ee;
  box-shadow: 2px 2px rgba(178, 199, 238, 0.5);
`;

const MyCards = styled.div`
  width: 270px;
  height: 30px;
  flex: 1;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding-left: 5px;
  &:hover {
    background-color: rgb(178, 199, 238);
  }
  cursor: pointer;
`;

const mapStateToProps = state => ({
  cardsToSearch: state.cards
});

class SearchPopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matchedListName: null,
      cardsSearch: null
    };
  }
  componentWillReceiveProps(newProps) {
    console.log("this is the new props", newProps);
    // first search the list names
    const listNames = Object.getOwnPropertyNames(this.props.cardsToSearch);
    const matchedListName = listNames.map(el => {
      if (el.substring(0, newProps.searchTerm.length) === newProps.searchTerm) {
        return el;
      }
    });
    // now seearch the cards
    let cardsSearch = [];
    if (this.props.cardsToSearch) {
      for (let i in this.props.cardsToSearch) {
        cardsSearch.push(
          this.props.cardsToSearch[i].map(el => {
            if (
              el.substring(0, newProps.searchTerm.length) ===
              newProps.searchTerm
            ) {
              return el;
            }
          })
        );
      }
    }

    this.setState({
      cardsSearch: cardsSearch,
      matchedListName: matchedListName
    });
  }
  render() {
    if (!this.props.searchTerm) {
      console.log(this.state.cardSearch);
      return (
        <PopUpWindowWrapper
          onMouseOver={() => console.log("mouse over...")}
          onFocus={() => console.log("ldnjcnkjsdnc focus")}
          onBlur={() => console.log("onBlur blur ....")}
        >
          thus is the wrapper
          <div
            style={{
              height: "75px",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <div
              style={{
                flex: 1,
                fontWeight: "bold",
                textAlign: "left",
                textSize: "18px"
              }}
            >
              <p style={{ fontSize: "18px" }}> Saved Searches</p>
            </div>
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center"
              }}
            >
              <MyCards>
                <div style={{ textAlign: "left", fontSize: "15px" }}>
                  My Cards @ me {this.props.searchTerm}
                </div>
              </MyCards>
            </div>
          </div>
          <div
            style={{
              height: "140px",
              borderTop: "solid",
              borderWidth: "thin",
              borderColor: "#b2c7ee",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <p style={{ color: "grey", fontSize: "15px" }}>
                Refine your search with operators like @member, #label,
                is:archived, and has:attachments. Learn more…
              </p>
            </div>
            <div
              style={{
                flex: 0.75,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around"
              }}
            >
              <p style={{ textAlign: "left", fontWeight: "bold" }}>
                Looking for help using Trello
              </p>
              <p style={{ textAlign: "left", fontSize: "15px" }}>
                Visit our help site or read the getting started guide
              </p>
            </div>
          </div>
        </PopUpWindowWrapper>
      );
    } else {
      console.log(this.state.cardSearch);
      return (
        <PopUpWindowWrapper onBlur={this.props.handleOnBlur}>
          blur
          <SearchedItem>
            {this.state.cardsSearch.map(el => {
              if (el) {
                return <div>{el}</div>;
              }
            })}
          </SearchedItem>
          {/* <SearchedItem>
            {this.state.matchedListName.map(el => {
              if (el) {
                return <div>{el}</div>;
              }
            })}
          </SearchedItem> */}
        </PopUpWindowWrapper>
      );
    }
  }
}

export default connect(mapStateToProps, null)(SearchPopUp);
