import React from "react";
import Icon from "./components/ui/Icon";
import PrimaryButton from "./components/ui/PrimaryButton";
import Logo from "./components/ui/Logo";
import Hero from "./components/sections/Hero";
import SelectedWork from "./components/sections/SelectedWork";
import Services from "./components/sections/Services";

const App = () => {
  return (
    <div className="w-full min-h-dvh">
      <Hero />
      <SelectedWork />
      <Services/>
    </div>
  );
};

export default App;
