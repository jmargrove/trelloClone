import React, { Component } from "react";

class ItemColumn extends Component {
  render() {
    return <div className="ColumnForList">{this.props.child}</div>;
  }
}

export default ItemColumn;
