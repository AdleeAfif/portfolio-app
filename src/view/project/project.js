import React from "react";

import "./project.css";
import { TypeAnimation } from "react-type-animation";

function Project() {
  return (
    <section id="project">
      <div className="project-container">
        <div className="project-text-box">
          <h1>
            My <br />
            <span className="project-unique-keyword">Projects</span>
          </h1>
          <h3>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                "Projects that I crafted to showcase my skills and passion for software development.",
                1000,
                "Projects that I collaborated on with cross-functional teams, fostering teamwork and problem-solving.",
                1000,
                "Projects that I initiated to explore emerging technologies and expand my technical horizons.",
                1000,
                "Projects that I designed to address real-world problems and contribute to social causes.",
                1000,
                "Projects that I built as personal side projects to experiment with new coding techniques and frameworks.",
                1000,
                "Projects that I contributed to open-source communities, giving back to the developer community.",
                1000,
                "Projects that I developed to demonstrate my proficiency in specific programming languages and technologies.",
                1000,
              ]}
              speed={10}
              style={{
                "padding-left": "60px",
                "font-style": "normal",
                "font-weight": "300",
              }}
              omitDeletionAnimation={true}
              repeat={Infinity}
              deletionSpeed={90}
            />
          </h3>
        </div>
      </div>
    </section>
  );
}

export default Project;
