import Header from "./components/Header";
import Hero from "./components/Hero";
import MainSection from "./components/MainSection";

function App() {
  return (
    <div id="app" className="flex flex-col">
      <Header />
      <Hero />
      <MainSection />
    </div>
  );
}

export default App;
