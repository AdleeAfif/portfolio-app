import React from "react";

import "./contact.css";
import sorryImg from "../component/img/sorry.png";

function Contact() {
  return (
    <section id="contact">
      <div className="coming-soon">
        <h1>
          You are currently at <span className="special-word">Contact</span>{" "}
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

export default Contact;
