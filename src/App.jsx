import React, { useState } from "react";
import NavBar from "./Component/NavBar";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Portfolio from "./Component/Portfolio";
import Contact from "./Component/Contact";


const App = () => {
  const [activeNav, setActiveNav] = useState("Home");

  return (
    <div className="app">
      <NavBar activeNav={activeNav} setActiveNav={setActiveNav} />
      <Hero setActiveNav={setActiveNav} />
      <About setActiveNav={setActiveNav} />
      <Portfolio setActiveNav={setActiveNav} />
      <Contact setActiveNav={setActiveNav} />
    </div>
  );
};

export default App;