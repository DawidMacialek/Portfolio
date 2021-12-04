import './app.scss';
import { useState } from 'react';
import Home from './copmonents/home/Home';
import About from './copmonents/about/About';
import Projects from './copmonents/projects/Projects';
import Contact from './copmonents/contact/Contact';
import NavBar from './copmonents/navBar/NavBar';

function App() {
  const [showNavBar, setShowNavBar] = useState(false);

  window.onscroll = () => {
    let windowHeight = window.innerHeight;
    let scrollPos = window.scrollY + 1;
    scrollPos > windowHeight ? setShowNavBar(true) : setShowNavBar(false);
    console.log(scrollPos);
    console.log(windowHeight);
  };
  return (
    <div className='app'>
      <NavBar showNavBar={showNavBar} />
      <div className='pages'>
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
