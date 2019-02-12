import React, { Component } from 'react';
import Header from './Header/Header.js';
import About from './About/About.js'
import Skills from './Skills/Skills.js'
import Education from './Education/Education.js'
import Experience from './Experience/Experience.js'
import Projects from './Projects/Projects.js'
import Footer from './Footer/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
