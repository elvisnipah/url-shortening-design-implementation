import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MainSection from "./components/MainSection";
import Menu from "./components/Menu";

import { useState } from "react";

function App() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div id="app" className="flex flex-col">
      <Header toggleMenu={toggleMenu} />
      <div className="relative">
        <Hero />
        {menuVisible && <Menu />}
      </div>

      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
