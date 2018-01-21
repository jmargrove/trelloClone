import React, { Component } from "react";
import ColumnList from "./ColumnList.js";
import connect from "react-redux";

const mapStateToProps = state => {
  listTitles: state.listTitles;
};

class ColumnContainer extends Component {
  render() {
    console.log("this.state", this.state);
    return (
      <div className="ColumnContainer">
        <ColumnList />
        <ColumnList />
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(ColumnContainer);
