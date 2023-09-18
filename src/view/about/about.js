import React from "react";

import "./about.css";
import adleeImg from "../component/img/adlee-image.png";

function About() {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-img-box">
          <img src={adleeImg} alt="Adlee" className="about-img" />
        </div>
        <div className="about-text-box">
          <div className="about-myself-box">
            <h1>About Myself</h1>
            <p>
              Given name is Nik Adlee Afif Bin Nik Mohd Kamil. Born and staying
              in Kelantan, Malaysia. A software engineering graduate from
              University Malaysia Pahang Al-Sultan Abdullah (UMPSA). Have a
              strong background in a range of MVC architecture projects and
              expertise in multiple programming languages. A quick learner with
              a true enthusiasm for coding, eagerly striving to bring innovative
              solutions and a positive influence to the ever-evolving technology
              landscape. In addition to my strong foundation in MVC architecture
              projects and proficiency in multiple programming languages, I
              possess a diverse skillset that enables me to excel in the field
              of software engineering. My expertise extends to various areas,
              including:
            </p>
            <div class="skill-table">
              <div class="row">
                <div class="cell">Software Architecture</div>
                <div class="cell">Software Documentation</div>
                <div class="cell">Software Testing</div>
              </div>
              <div class="row">
                <div class="cell">Web Development</div>
                <div class="cell">Mobile Development</div>
                <div class="cell">Backend Development</div>
              </div>
              <div class="row">
                <div class="cell">Data Warehouse</div>
                <div class="cell">DevOps Practices</div>
                <div class="cell">Agile Methodologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
