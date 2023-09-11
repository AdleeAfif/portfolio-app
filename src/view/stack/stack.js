import React from "react";

import "./stack.css";
import sorryImg from "../component/img/sorry.png";

function Stack() {
  return (
    <section id="stack">
      <div className="coming-soon">
        <h1>
          You are currently at <span className="special-word">stack</span> page!
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

export default Stack;
