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
                "crafted to showcase my skills and passion for software development.",
                1000,
                "collaborated on with cross-functional teams, fostering teamwork and problem-solving.",
                1000,
                "initiated to explore emerging technologies and expand my technical horizons.",
                1000,
                "designed to address real-world problems and contribute to social causes.",
                1000,
                "built as personal side projects to experiment with new coding techniques and frameworks.",
                1000,
                "developed to demonstrate my proficiency in specific programming languages and technologies.",
                1000,
              ]}
              speed={10}
              style={{
                "margin": "30px",
                "font-style": "normal",
                "font-weight": "300"
              }}
              omitDeletionAnimation={true}
              repeat={Infinity}
              deletionSpeed={90}
            />
          </h3>
        </div>
        <div className="project-table">
          <table>
            <tbody>
              <tr>
                <td>
                  <img
                    src="project1.jpg"  // Replace with the actual image source
                    alt="Personal Portfolio"
                    className="project-image"
                  />
                  <p className="project-title">Personal Portfolio Site</p>
                </td>
                <td>
                  <img
                    src=""  // Replace with the actual image source
                    alt="Contact Manager"
                    className="project-image"
                  />
                  <p className="project-title">Contact Manager API</p>
                </td>
                <td>
                  <img
                    src="project3.jpg"  // Replace with the actual image source
                    alt="WeatherEye"
                    className="project-image"
                  />
                  <p className="project-title">WeatherEye App</p>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="project4.jpg"  // Replace with the actual image source
                    alt="Book Review"
                    className="project-image"
                  />
                  <p className="project-title">Book Review Site</p>
                </td>
                <td>
                  <img
                    src="project5.jpg"  // Replace with the actual image source
                    alt="Blogging Site"
                    className="project-image"
                  />
                  <p className="project-title">Blogging Site</p>
                </td>
                <td>
                  <img
                    src="project6.jpg"  // Replace with the actual image source
                    alt="To Do Manager"
                    className="project-image"
                  />
                  <p className="project-title">To Do Manager App</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Project;
