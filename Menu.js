import React, { Component } from "react";
import pages from "../sample-pages";

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      url: "",
    };
  }

  goToPage(page) {
    const { url } = page;
    this.props.history.push(`${url}`);
  }

  render() {
    return (
      <div className="menublock">
        <div className="menu" id="menu">
          <div className="options">
            {pages.map((page) => {
              return (
                <h2 onClick={() => this.goToPage(page)} key={page.id}>
                  {page.title}
                </h2>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
