import React from "react";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <>
      <SideBar />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Contact />
        
      </main>
    </>
  );
};

export default App;
