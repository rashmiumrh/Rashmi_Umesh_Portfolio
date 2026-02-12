// import React, { useState } from "react";
// import NavBar from "./Component/NavBar";
// import MainPage from "./Component/MainPage";

// const App = () => {
//   const [activeNav, setActiveNav] = useState("Home");

//   return (
//     <div>
//       <MainPage setActiveNav={setActiveNav} activeNav={activeNav} />
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import NavBar from "./Component/NavBar";
import Hero from "./Component/hero";
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
