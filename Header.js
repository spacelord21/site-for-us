import React, { Component } from "react";

export default class SwimmMenu extends Component {
  swimmingMenu(event) {
    let m = document.getElementById("menu");
    let c = document.querySelector(".container").classList;
    c.toggle("change");
    if (event.target.id !== "btn") {
      m.style.opacity = 0;
    } else {
      m.style.opacity = m.style.opacity !== "1" ? "1" : "0";
      m.style.width = m.style.width !== "250px" ? "250px" : "0";
    }
  }
  render() {
    return (
      <div>
        <div className="header">
          <div className="button-menu">
            <div className="container" id="btn" onClick={this.swimmingMenu}>
              <div className="bar1" id="btn"></div>
              <div className="bar2" id="btn"></div>
              <div className="bar3" id="btn"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
