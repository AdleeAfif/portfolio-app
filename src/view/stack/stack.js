import React from "react";

import "./stack.css";

function Stack() {
  return (
    <section id="stack">
      <div className="stack-container">
        <div className="stack-text-box">
          <h1>
            <span className="stack-unique-keyword">Stacks</span> <br />
            of choice
          </h1>
        </div>
        <table className="stack-table">
          <tr>
            <td>
              <img
                width="96"
                height="96"
                src="https://img.icons8.com/color/96/nodejs.png"
                alt="nodejs"
                className="framework-img"
              />
            </td>
            <td>
              <img
                width="96"
                height="96"
                src="https://img.icons8.com/color/96/000000/express-js.png"
                alt="express-js"
                className="framework-img"
              />
            </td>
            <td>
              <img
                width="96"
                height="96"
                src="https://img.icons8.com/color/96/mongodb.png"
                alt="mongodb"
                className="framework-img"
              />
            </td>
            <td>
              <img
                width="96"
                height="96"
                src="https://img.icons8.com/color/96/mysql-logo.png"
                alt="mysql-logo"
                className="framework-img"
              />
            </td>
            <td>
              <img
                width="96"
                height="96"
                src="https://img.icons8.com/color/96/firebase.png"
                alt="firebase"
                className="framework-img"
              />
            </td>
          </tr>
          <tr>
            <td>
              <img
                width="96"
                height="96"
                src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
                alt="external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo"
                className="framework-img"
              />
            </td>
            <td>
              <img
                width="96"
                height="96"
                src="https://img.icons8.com/color/96/clr_ejs_1.png"
                alt="ejs_engine"
                className="framework-img"
              />
            </td>
            <td>
              <img
                width="96"
                height="96"
                src="https://img.icons8.com/color/96/tailwind_css.png"
                alt="tailwind_css"
                className="framework-img"
              />
            </td>
            <td>
              <img
                width="96"
                height="96"
                src="https://img.icons8.com/color/96/git.png"
                alt="git"
                className="framework-img"
              />
            </td>
            <td>
              <img
                width="96"
                height="96"
                src="https://img.icons8.com/color/96/amazon-web-services.png"
                alt="amazon-web-services"
                className="framework-img"
              />
            </td>
          </tr>
        </table>
      </div>
    </section>
  );
}

export default Stack;
