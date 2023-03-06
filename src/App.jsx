import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MainSection from "./components/MainSection";
import Menu from "./components/Menu";

import { useState, useEffect } from "react";

function App() {
  const [menuVisible, setMenuVisible] = useState(false);

  const [windowSize, setWindowSize] = useState([window.innerWidth]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div id="app" className="flex flex-col items-center">
      <Header toggleMenu={toggleMenu} />

      <div className="relative">
        <Hero />
        {menuVisible && <Menu />}
      </div>

      <MainSection windowSize={windowSize} />
      <Footer />
    </div>
  );
}

export default App;
