import React, { Component, useState, useEffect } from "react";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Year from "./year";
import "react-big-calendar/lib/css/react-big-calendar.css";

import "./App.css";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);
const [releases, setReleases] = useState([]);
localizer.formats.yearHeaderFormat = "YYYY";
// localizer.messages.year = 'Year'

useEffect(() => {
  getReleases();
});

const getReleases = () => {
  fetch("https://jsonkeeper.com/b/MVWK")
  ,then(response => response.json())
  .then(data => setReleases(data))
  .catch(err => console.error(err))
  console.log('releases', releases)
}

  // componentDidMount() {
  //   axios
  //     .get("https://jsonkeeper.com/b/MVWK")
  //     // .get("./Data/releases")
  //     .then(function (response) {
  //       // console.log(response.data);
  //       let releases = response.data;

  //       for (let i = 0; i < releases.length; i++) {
  //         // console.log(releases[i]);
  //         releases[i].start = moment.utc(releases[i].start).toDate();
  //         releases[i].end = moment.utc(releases[i].end).toDate();
  //       }
  //       this.setState({
  //         cal_events: releases,
  //       });
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

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
            views={{
              day: true,
              week: true,
              month: true,
              year: Year,
            }}
            messages={{ year: "Year" }}
            defaultDate={new Date()}
          />
        </div>
      </div>
    );
  }
}

export default App;
