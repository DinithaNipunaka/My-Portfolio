// App.js
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/sections/AboutMe";
import Education from "./components/sections/Education";
import Certifications from "./components/sections/Certifications";
import Experience from './components/sections/Experience';
import Projects from "./components/sections/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/sections/Contact";
import "./App.css";
import Footer from './components/sections/Footer'; 

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark-mode" : "app light-mode"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <AboutMe darkMode={darkMode} />
        <Education darkMode={darkMode} />
        <Certifications darkMode={darkMode} />
        <Experience darkMode={darkMode}/>
        <Projects darkMode={darkMode} /> 
        <Contact darkMode={darkMode} />
        
        <Footer />
        
      </main>
    </div>
  );
}

export default App;