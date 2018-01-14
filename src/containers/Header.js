import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="headerBanner">
        <div className="cloneLogo">
          <div className="logoBar" />
          <div className="logoBar" id="bar2" />
          <div className="logoBar" id="bar3" />
        </div>
        <h1> trelloClone</h1>
      </div>
    );
  }
}

export default Header;
