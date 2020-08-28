import React, { Component } from "react";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
// import Year from "./year";
import "react-big-calendar/lib/css/react-big-calendar.css";

import ParticleComponent from "./Components/particles/ParticleComponent";

import "./App.css";
import Axios from "axios";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);
localizer.formats.yearHeaderFormat = "YYYY";
// localizer.messages.year = 'Year'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cal_events: [],
    };
  }

  convertDate = (date) => {
    return moment.utc(date).toDate();
  };

  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://jsonkeeper.com/b/MVWK";
    Axios.get(proxyurl + url).then((response) => {
      // .then((response) => response.json())
      // .then((contents) => console.log(contents));

      let releases = response.data;
      console.log(releases, "releases");

      //   for (let i = 0; i < releases.length; i++) {
      //     console.log(releases[i]);
      //     releases[i].launch_date = this.convertDate(
      //       releases[i].start
      //     ).toDate();
      //     releases[i].launch_date = this.convertDate(releases[i].end).toDate();
      //   }
      //   this.setState({
      //     cal_events: releases,
      //   });
      // })
      // .catch(function (error) {
      //   console.log(error);
    });
  }

  render() {
    const { cal_events } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Netflix Event Releases</h1>
          <ParticleComponent />
        </header>
        <div style={{ height: 600 }}>
          <Calendar
            localizer={localizer}
            events={cal_events}
            step={30}
            defaultView="month"
            // views={{
            //   day: true,
            //   week: true,
            //   month: true,
            //   // year: true,
            // }}
            // messages={{ year: "Year" }}
            defaultDate={new Date()}
          />
        </div>
      </div>
    );
  }
}

export default App;
