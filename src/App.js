import React from 'react';
import logo from './logo.svg';
import './App.css';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <Details/>
      <Skills/>
      <Education/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
