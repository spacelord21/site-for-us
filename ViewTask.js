import React, { Component } from "react";

export default class ViewTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: this.props.index,
      tasks: this.props.tasks,
    };
    this.cherta = this.cherta.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  cherta(event) {
    let index = this.state.index;
    let slovo = document.querySelector(`.${index}`);
    if (event.target.id === "done") {
      slovo.style.textDecoration =
        slovo.style.textDecoration === "line-through" ? "none" : "line-through";
    }
  }

  deleteTask = () => {
    var vals = this.state.tasks;
    vals = null;
    this.setState({
      tasks: vals,
    });
  };

  render() {
    const { index } = this.props;
    const tasks = this.state.tasks;
    return (
      <div>
        {!tasks ? (
          ""
        ) : (
          <li>
            <span className="viewtask">
              <span className={`viewtask-main ${index}`}>{tasks}</span>
              <div className="buttons">
                <div className="cancellItem" onClick={this.deleteTask}>
                  &times;
                </div>
                <div id="done" onClick={this.cherta}>
                  ✓
                </div>
              </div>
            </span>

            {/* <div className="cancellItem">&times;</div> */}
          </li>
        )}
      </div>
    );
  }
}
