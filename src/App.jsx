import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import { BASE_URL } from "./utils/constant";

function App() {
  return (
    <>
      <Routes>
        <Route path={BASE_URL} element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path={`${BASE_URL}/about`} element={<About />}></Route>
          <Route
            path={`${BASE_URL}/experience`}
            element={<Experience />}
          ></Route>
          <Route path={`${BASE_URL}/skill`} element={<Skill />}></Route>
          <Route path={`${BASE_URL}/contact`} element={<Contact />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
