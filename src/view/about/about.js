import React from "react";

import "./about.css";
import sorryImg from "../component/img/sorry.png";

function About() {
  return (
    <section id="about">
      <div className="coming-soon">
        <h1>
          You are currently at <span className="special-word">About</span> page!
        </h1>
        <h2>
          Currently under development, see progress{" "}
          <a href="https://github.com/AdleeAfif/portfolio-app">here.</a>
        </h2>
        <img src={sorryImg} alt="sorry.png" />
      </div>
    </section>
  );
}

export default About;
