import React, { Component } from "react";
import { render } from "react-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";
// import logo from "./logo.svg";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

class App extends Component {
  constructor(props) {
    super(props);

    this.staet = {
      cal_events: [],
    };
  }

  componentDidMount() {
    let self = this;
    axios
      // .get("https://api.jsonbin.io/b/5f45f420514ec5112d0e794a")
      .get("./Data/releases")
      .then(function (response) {
        // console.log(response.data);
        let releases = response.data;

        for (let i = 0; i < releases.length; i++) {
          // console.log(releases[i]);
          releases[i].start = moment.utc(releases[i].start).toDate();
          releases[i].end = moment.utc(releases[i].end).toDate();
        }
        self.setState({
          cal_events: releases,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <Calendar localizer={localizer} startAccessor="start" endAccessor="end" />
    );
  }
}

export default App;
