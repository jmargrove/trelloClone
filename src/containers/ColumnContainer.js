import React, { Component } from "react";
import ColumnList from "./ColumnList.js";
import AddList from "./AddList.js";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  listTitles: state.listTitles
});

class ColumnContainer extends Component {
  render() {
    console.log("this.state", this.props);
    return (
      <div className="ColumnContainer">
        {this.props.listTitles.map(title => <ColumnList listTitle={title} />)}
        <AddList />
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(ColumnContainer);
