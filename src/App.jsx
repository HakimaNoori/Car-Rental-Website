import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import Hero from "./components/Hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/About/About";

const App = () => {

  // Dark Mode Feature
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ?
      localStorage.getItem("theme") : "dark"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem(theme, "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

// AOS Initialization
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh()
  }, []);
  
  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <About/>
    </div>
  );
};

export default App;
