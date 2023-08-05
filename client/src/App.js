import NavBar from "./components/Nav_Bar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { useState } from "react";

export default function App() {
  const [dark, setDark] = useState(false);

  function handleToggle() {
    setDark(!dark);
  }
  return (
    <div id={dark ? "theme-dark" : "theme"}>
      <NavBar handleToggle={handleToggle} />
      <Home />
      <About />
      <Project />
      <Contact />
    </div>
  );
}
