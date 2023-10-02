import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Skill from "./components/Skill";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/react-portfolio" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="experience" element={<Experience />}></Route>
          <Route path="skill" element={<Skill />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
