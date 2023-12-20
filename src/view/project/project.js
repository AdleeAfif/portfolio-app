import React from "react";

import portfolioApp from "./img/portfolio-app.png";
import contactManager from "./img/contact-manager.png";
import weatherEye from "./img/weather-report.png";
import bookReview from "./img/book-review.png";
import todoManager from "./img/to-do-manager.png";
import bloggingApp from "./img/blogging-site.png";

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
                    src= {portfolioApp}  // Replace with the actual image source
                    alt="Personal Portfolio"
                    className="project-image"
                  />
                  <a href="https://github.com/AdleeAfif/portfolio-app"><p className="project-title">Personal Portfolio Site</p></a>
                </td>
                <td>
                  <img
                    src={contactManager}  // Replace with the actual image source
                    alt="Contact Manager"
                    className="project-image"
                  />
                  <a href="https://github.com/AdleeAfif/Contact-Manager"><p className="project-title">Contact Manager API</p></a>
                </td>
                <td>
                  <img
                    src={weatherEye}  // Replace with the actual image source
                    alt="WeatherEye"
                    className="project-image"
                  />
                  <a href="https://github.com/AdleeAfif/WeatherEye"><p className="project-title">WeatherEye App</p></a>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src={bookReview}  // Replace with the actual image source
                    alt="Book Review"
                    className="project-image"
                  />
                  <a href="https://github.com/AdleeAfif/Book-Review-App"><p className="project-title">Book Review Site</p></a>
                </td>
                <td>
                  <img
                    src={bloggingApp}  // Replace with the actual image source
                    alt="Blogging Site"
                    className="project-image"
                  />
                  <a href="https://github.com/AdleeAfif/Blogging-App"><p className="project-title">Blogging Site</p></a>
                </td>
                <td>
                  <img
                    src={todoManager} // Replace with the actual image source
                    alt="To Do Manager"
                    className="project-image"
                  />
                  <a href="https://github.com/AdleeAfif/To-Do-Manager-API"><p className="project-title">To Do Manager App</p></a>
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
