import React, { Component } from "react";

export default class TaskForm extends Component {
  taskRef = React.createRef();

  sendTask = (event) => {
    event.preventDefault();
    const val = this.taskRef.current.value;
    this.props.createTask(val);
    document.querySelector(".sendtask").value = "";
  };

  render() {
    return (
      <div>
        <form onSubmit={this.sendTask}>
          <textarea
            ref={this.taskRef}
            className="sendtask"
            placeholder="Сюда пишется задача на день, чел.."
          ></textarea>
          <button className="btn-give">+Добавить задачу</button>
        </form>
      </div>
    );
  }
}
