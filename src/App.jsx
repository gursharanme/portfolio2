import Hero from "./components/sections/Hero";
import SelectedWork from "./components/sections/SelectedWork";
import Services from "./components/sections/Services";
import About from "./components/sections/About";
import Techstack from "./components/sections/Techstack";

const App = () => {
  return (
    <div className="w-full min-h-dvh">
      <Hero />
      <SelectedWork />
      <Services />
      <About />
      <Techstack/>
    </div>
  );
};

export default App;
