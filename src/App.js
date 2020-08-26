import React, { Component } from "react";
import { render } from "react-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
// import logo from "./logo.svg";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

const myEventsList = {};

class App extends Component {
  constructor() {}
  componentDidMount() {}
  render() {
    return (
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
      />
    );
  }
}

export default App;
