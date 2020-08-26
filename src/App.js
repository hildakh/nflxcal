import React, { Component } from "react";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import axios from "axios";

import logo from "./logo.svg";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./App.css";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cal_events: [],
    };
  }

  componentDidMount() {
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
        this.setState({
          cal_events: releases,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { cal_events } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Netflix Event Releases</h1>
        </header>
        <div style={{ height: 600 }}>
          <Calendar
            localizer={localizer}
            events={cal_events}
            step={30}
            defaultView="month"
            views={["year", "month", "day"]}
            defaultDate={new Date()}
          />
        </div>
      </div>
    );
  }
}

export default App;
