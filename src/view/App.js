import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./component/header";
import About from "./about/about";
import Home from "./home/home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
