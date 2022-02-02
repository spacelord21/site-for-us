import React, { Component } from "react";
import moment from "moment";

export default class Сalendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monthNow: moment(),
      dayList: moment().startOf("day"),
      selectedMonth: '',
      selectedDay: ''
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToCurrentMonthView = this.goToCurrentMonthView.bind(this);
  }

  next() {
    const currentMonth = this.state.monthNow;
    this.setState({
      monthNow: currentMonth.add(1, "month"),
    });
    console.log(this.state.monthNow);
  }

  previous() {
    const currentMonth = this.state.monthNow;
    const dayLists = this.state.dayList;
    this.setState({
      monthNow: currentMonth.subtract(1, "month"),
      dayList: dayLists.add(1, "day"),
    });
  }

  select(day) {
    this.setState({
      selectedMonth: day.date,
      selectedDay: day.date.clone(),
    });
    var x = this.state.monthNow;
    var y = this.state.dayList;
    console.log(`${this.state.selectedDay}`);
  }

  renderWeeks() {
    const currentMonthView = this.state.monthNow;
    const currentSelectedDay = this.state.selectedDay;
    let weeks = [];
    let done = false;
    let previousCurrentNextView = currentMonthView
      .clone()
      .startOf("month")
      .subtract(1, "d")
      .day("Monday");
    let count = 0;
    let monthIndex = previousCurrentNextView.month();

    while (!done) {
      weeks.push(
        <Week
          previousCurrentNextView={previousCurrentNextView.clone()}
          currentMonthView={currentMonthView}
          selected={currentSelectedDay}
          select={(day) => this.select(day)}
          key={previousCurrentNextView.date()}
          month={this.state.monthNow}
        />
      );
      previousCurrentNextView.add(1, "w");
      done = count++ > 2 && monthIndex !== previousCurrentNextView.month();
      monthIndex = previousCurrentNextView.month();
    }
    return weeks;
  }

  goToCurrentMonthView() {
    this.setState({
      monthNow: moment(),
    });
  }

  render() {
    const currentMonth = this.state.monthNow;
    return (
      <div className="main-calendar">
        <header>
          <div className="head-calendar">
            <div className="button-calendar" onClick={this.previous}>
              ⇐
            </div>
            <div className="pick-today" onClick={this.goToCurrentMonthView}>
              Today
            </div>
            <div className="name-month">{currentMonth.format("MMMM YYYY")}</div>
            <div className="button-calendar" onClick={this.next}>
              ⇒
            </div>
          </div>
        </header>
        <div className="day-names">
          <DayNames />
        </div>
        <div className="calendar">
          <div className="days">{this.renderWeeks()}</div>
        </div>
      </div>
    );
  }
}

class DayNames extends Component {
  render() {
    return (
      <div className="row-days">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>
    );
  }
}

class Week extends Component {
  render() {
    let days = [];
    let date = this.props.previousCurrentNextView;
    let currentMonthView = this.props.currentMonthView;
    let selected = this.props.selected;
    let select = this.props.select;

    for (var i = 0; i < 7; i++) {
      let day = {
        name: date.format("dd").substring(0, 1),
        number: date.date(),
        isCurrentMonth: date.month() === currentMonthView.month(),
        isToday: date.isSame(new Date(), "day"),
        date: date,
      };

      days.push(
        <Day
          currentMonthView={currentMonthView.month()}
          day={day}
          selected={selected}
          select={select}
          index={day.number + `${currentMonthView.month()}`}
          key={day.number + `${currentMonthView.month()}`}
        />
      );
      date = date.clone();
      date.add(1, "d");
    }
    return <div className="row-week">{days}</div>;
  }
}

class Day extends Component {
  viewCurrentTask = () => {
    let index = this.props.index;
    // console.log(index);
  };

  render() {
    let day = this.props.day;
    let selected = this.props.selected;
    let select = this.props.select;

    return (
      <div
        className={
          "day" +
          (day.isToday ? " today" : "") +
          (day.isCurrentMonth ? "" : " different-month") +
          (day.date.isSame(selected) ? " selected" : "")
        }
        onClick={() => select(day)}
      >
        <div className="day-number" onClick={this.viewCurrentTask}>
          {day.number}
        </div>
      </div>
    );
  }
}
