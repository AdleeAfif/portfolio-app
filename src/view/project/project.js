import React from "react";

import "./project.css";
import sorryImg from "../component/img/sorry.png";

function Project() {
  return (
    <section id="project">
      <div className="coming-soon">
        <h1>
          You are currently at <span className="special-word">Project</span>{" "}
          page!
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

export default Project;
