import './app.scss';
import { useState } from 'react';
import Home from './copmonents/home/Home';
import About from './copmonents/about/About';
import Projects from './copmonents/projects/Projects';
import Contact from './copmonents/contact/Contact';
import NavBar from './copmonents/navBar/NavBar';
import { HOME, ABOUT, PROJECTS, CONTACT } from './data/menuElements';

function App() {
  const [showNavBar, setShowNavBar] = useState(false);
  const [selectedAtNav, setSelectedAtNav] = useState('');

  const handleScroll = (e) => {
    let windowHeight = window.innerHeight;
    let scrollPos = e.target.scrollTop;

    if (e.target.scrollTop >= windowHeight * 0.5) {
      setShowNavBar(true);
    } else {
      setShowNavBar(false);
    }

    if (windowHeight > scrollPos) {
      setSelectedAtNav(HOME);
    } else if (windowHeight <= scrollPos && windowHeight * 2 > scrollPos) {
      setSelectedAtNav(ABOUT);
    } else if (windowHeight * 2 <= scrollPos && windowHeight * 3 > scrollPos) {
      setSelectedAtNav(PROJECTS);
    } else if (windowHeight * 3 <= scrollPos && windowHeight * 4 > scrollPos) {
      setSelectedAtNav(CONTACT);
    }
  };
  return (
    <div className='app'>
      <NavBar showNavBar={showNavBar} selectedAtNav={selectedAtNav} />
      <div className='pages' onScroll={handleScroll}>
        <Home showNavBar={showNavBar} />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
