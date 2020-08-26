import React, { useState, useEffect } from "react";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Year from "./year";
import "react-big-calendar/lib/css/react-big-calendar.css";

import "./App.css";

function App() {
  useEffect(() => {
    getReleases();
  });

  moment.locale("en-GB");
  const localizer = momentLocalizer(moment);
  const [releases, setReleases] = useState([]);
  localizer.formats.yearHeaderFormat = "YYYY";
  // localizer.messages.year = 'Year'

  const getReleases = () => {
    fetch("https://jsonkeeper.com/b/MVWK")
      .then((response) => response.json())
      .then((data) => setReleases(data))
      .catch((err) => console.error(err));
    console.log("releases", releases);
  };

  const eventList = releases.map((releases) => (
    <tr key={releases.title}>
      <td>{releases.launch_date}</td>
      <td>{releases.id}</td>
    </tr>
  ));

  console.log("events:", eventList);

  const events = [
    {
      allDay: "false",
      title: releases.title,
      start: releases.launch_date,
      end: releases.launch_date + moment().add(eventList.title),
    },
  ];

  return (
    <div className="tc">
      <h1 className="f1"> Netflix Event Releases</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={["month", "day", "week"]}
        style={{ height: 450 }}
      />
    </div>
  );
}

export default App;
