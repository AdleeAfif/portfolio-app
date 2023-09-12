import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./component/header";
import About from "./about/about";
import Home from "./home/home";
import Project from "./project/project";
import Stack from "./stack/stack";
import Contact from "./contact/contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
