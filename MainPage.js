import React, { Component } from "react";
import TaskForm from "./TaskForm";
import ViewTask from "./ViewTask";
import Menu from "./Menu";
import Calendar from "./Calendar";
import Header from "./Header";

export default class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskD: {},
      taskS: {},
    };

    this.createTaskDanil = this.createTaskDanil.bind(this);
    this.createTaskSasha = this.createTaskSasha.bind(this);
  }

  // componentDidMount() {
  //   this.timerID = setInterval(() => {
  //     let hours = new Date().getHours();
  //     let minutes = new Date().getMinutes();
  //     if (hours === 0 && minutes === 0) {
  //       this.setState({
  //         taskD: {},
  //         taskS: {},
  //       });
  //     }
  //   });
  // }

  createTaskDanil(val) {
    const vals = { ...this.state.taskD };
    vals[`taskD${Date.now()}`] = val;
    this.setState({ taskD: vals });
  }

  createTaskSasha(val) {
    const vals = { ...this.state.taskS };

    vals[`taskS${Date.now()}`] = val;

    this.setState({ taskS: vals });
  }

  deleteTask = (key) => {
    const vals = { ...this.state.taskD };
    vals[key] = null;
  };

  render() {
    return (
      <div>
        <Header />
        <div className="test">
          <Menu history={this.props.history} />
          <div className="main-page">
            <div className="main-block">
              <div className="today-tasks">
                <div className="danil">
                  <div>
                    <h2>Данил</h2>
                    <span>Задачи на день</span>
                  </div>
                  <div className="showtask">
                    {Object.keys(this.state.taskD).map((key) => {
                      return (
                        <ViewTask
                          key={key}
                          tasks={this.state.taskD[key]}
                          index={key}
                        />
                      );
                    })}
                  </div>

                  <TaskForm createTask={this.createTaskDanil} />
                </div>
                <div className="calendar-block">
                  <Calendar />
                </div>
                <div className="sasha">
                  <div>
                    <h2>Саша</h2>
                    <span>Задачи на день</span>
                  </div>
                  <div className="showtask">
                    {Object.keys(this.state.taskS).map((key) => {
                      return (
                        <ViewTask
                          key={key}
                          index={key}
                          tasks={this.state.taskS[key]}
                        />
                      );
                    })}
                  </div>
                  <TaskForm createTask={this.createTaskSasha} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
