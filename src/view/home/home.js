import React from "react";

import "./home.css";
import myResume from "../component/misc/resume.pdf";
import homeImg from "../component/img/progammer.png";
import iconGitHub from "../component/img/icons8-github-94.png";
import iconInstagram from "../component/img/icons8-instagram-94.png";
import iconLinkedIn from "../component/img/icons8-linkedin-94.png";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <section id="home">
      <div className="home-container">
        <div className="intro-box">
          <div className="intro-text-box">
            <div className="intro-text">
              TESTING, my name is{" "}
              <span className="intro-name-text">
                Adlee Afif. &#128104;&#8205;&#128187;
              </span>
            </div>
            <div className="role-text">
              I am a <br />
              <span className="role-name-text">
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed once, initially
                    "Mobile App Dev.",
                    1000,
                    "Back-end Dev.",
                    1000,
                    "Software Dev.",
                    1000,
                    "Software Engni",
                    1000,
                    "Software Enginer",
                    1000,
                    "Software Engineer.",
                    1000,
                  ]}
                  speed={20}
                  style={{ fontSize: "72px" }}
                  repeat={Infinity}
                  deletionSpeed={90}
                />
              </span>
            </div>
            <div className="welcome-text">
              Welcome to my portfolio page! &#128075;
            </div>
          </div>
          <a
            href={myResume}
            download="adlee-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="resume-button"
          >
            <div className="information-box">
              <div className="information-text">Download Resume</div>
            </div>
          </a>
          <div className="soc-media-box">
            <a href="https://github.com/AdleeAfif">
              <img
                src={iconGitHub}
                alt="GitHub Icon"
                className="soc-med-icon"
              />
            </a>
            <a href="https://www.linkedin.com/in/adlee-afif">
              <img
                src={iconLinkedIn}
                alt="LinkedIn Icon"
                className="soc-med-icon"
              />
            </a>
            <a href="https://www.instagram.com/adleeafif/">
              <img
                src={iconInstagram}
                alt="Instagram Icon"
                className="soc-med-icon"
              />
            </a>
          </div>
        </div>
        <div className="img-box">
          <img src={homeImg} alt="homeImg" className="home-image" />
        </div>
      </div>
    </section>
  );
}

export default Home;
