import React, { Component } from "react";
import ColumnList from "./ColumnList.js";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  listTitles: state.listTitles
});

class ColumnContainer extends Component {
  render() {
    console.log("this.state", this.props);
    return (
      <div className="ColumnContainer">
        {this.props.listTitles.map(title => <ColumnList title={title} />)}
        <ColumnList />
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(ColumnContainer);
