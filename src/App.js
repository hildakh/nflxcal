import React, { useState, useEffect } from "react";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Year from "./year";
import "react-big-calendar/lib/css/react-big-calendar.css";

import Particles from "react-particles-js";
import "./App.css";

const particlesOptions = {
  // params={
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 1803.4120608655228,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 2,
        color: "#000000",
      },
      polygon: {
        nb_sides: 4,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.4008530152163807,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 1.5,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 0,
      color: "#ffffff",
      opacity: 0.3687847739990702,
      width: 0.6413648243462091,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: false,
        mode: "bubble",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

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
      <Particles className="particles" params={particlesOptions} />
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
