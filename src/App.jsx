import React from "react";
import Icon from "./components/ui/Icon";
import PrimaryButton from "./components/ui/PrimaryButton";
import Logo from "./components/ui/Logo";
import Hero from "./components/sections/Hero";
import SelectedWork from "./components/sections/SelectedWork";

const App = () => {
  return (
    <div className="w-full min-h-dvh">
      <Hero />
      <SelectedWork/>
    </div>
  );
};

export default App;
