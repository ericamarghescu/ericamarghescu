import './App.css';
import Navbar from './components/sections/Navbar';
import Social from './components/sections/Social';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Coursework from './components/sections/Coursework';
import Progress from './components/sections/Progress';
import React, { useState, useEffect } from 'react';


function App() {
  const [width, setWindowWidth] = useState(0);

  useEffect( () => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [])

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const responsive = {
    showIcons: width > 1023
  }

  return (
    <div className="App">
      <Navbar showIcons={responsive.showIcons}/>
      <Social/>
      <Home/>
      <About/>
      <Coursework/>
    </div>
  );
}

export default App;