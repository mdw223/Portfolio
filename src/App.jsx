import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';


function App() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <section id='home'> <Home /> </section>
        <section id="about"> <About /> </section>
        <section id="projects"> <Projects /> </section>
        <section id="contact"> <Contact /> </section>
        
      </div>
    </>
  )
}

export default App
