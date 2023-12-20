import React from "react";

import "./contact.css";

function Contact() {
  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-text-box">
          <h1>Get in touch!</h1>
          <h3>Feel free to reach out using the information below.</h3>
        </div>
        <div className="contact-card">
          <div className="contact-info">
            <p>
              <strong>Name:</strong> Nik Adlee Afif
            </p>
            <p>
              <strong>Email:</strong> adlee.afiff@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> (+60)14-5273737
            </p>
            <p>
              <strong>Location:</strong> Kota Bharu, Kelantan
            </p>
          </div>

          <div className="social-links">
            <p>
              <strong>Connect with me on:</strong>
            </p>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/adlee-afif"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/AdleeAfif"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              {/* Add more social media links as needed */}
            </ul>
          </div>

          <div className="communication">
            <p>
              <strong>Preferred method of communication:</strong> Email
            </p>
            <p>
              <strong>Availability:</strong> Open to job opportunities and
              collaborations.
            </p>
          </div>
          <div className="map-section">
        <iframe
          title="My Location"
          width="100%"
          height="250"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126949.58997673923!2d102.21734642948769!3d6.107166231890035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31b6afc27a0ea2e1%3A0xd3fb8d8332a81530!2sKota%20Bharu%2C%20Kelantan!5e0!3m2!1sen!2smy!4v1703058404103!5m2!1sen!2smy"
        ></iframe>
      </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
