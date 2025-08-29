import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/home';
import About from './components/About'
import Experience from './components/experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
// import Experiance from './components/Experiance';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      {/* <Experiance/> */}
      <Experience/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App