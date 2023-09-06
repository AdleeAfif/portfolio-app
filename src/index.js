import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./view/App";
import reportWebVitals from "./reportWebVitals";
import Header from "./view/component/header";
import Footer from "./view/component/footer";
import { Route, BrowserRouter, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" component={App} />
        <Route path="/users" component={App} />
        <Route path="/contact" component={App} />
        <Route component={App} />
      </Routes>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
