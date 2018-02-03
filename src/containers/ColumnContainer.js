import React, { Component } from "react";
import ColumnList from "./ColumnList.js";
import AddList from "./AddList.js";
import { connect } from "react-redux";
import uuid from "uuid/v1";

const mapStateToProps = state => ({
  listTitles: state.listTitles
});

class ColumnContainer extends Component {
  render() {
    return (
      <div className="ColumnContainer">
        {this.props.listTitles.map((title, i) => (
          <ColumnList key={uuid()} listTitle={title} i={i} />
        ))}
        <AddList />
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(ColumnContainer);
