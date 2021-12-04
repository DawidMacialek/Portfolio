import { useEffect, useRef } from 'react';
import { init } from 'ityped';
import './home.scss';
import { quote } from '../../data/homePage';
import { HOME, ABOUT } from '../../data/menuElements';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const refToQuote = useRef();

  useEffect(() => {
    const isTypping = 100;
    init(refToQuote.current, {
      showCursor: true,
      strings: quote,
      typeSpeed: isTypping,
      backSpeed: 50,
      backDelay: 500,
      loop: true,
      cursorChar: '|',
    });
  }, []);

  return (
    <div className='home-container' id={HOME}>
      <div className='home'>
        <div className='welcome'>
          <h1>Dawid Maciałek</h1>
          <h2>Front End Developer</h2>
          <div className='tapping-container'>
            <span className='quote' ref={refToQuote}></span>
          </div>
        </div>
        <div className='arrow-container'>
          <Link to={ABOUT} spy={true} smooth='easeInOutBack' duration={600}>
            <FontAwesomeIcon icon={faAngleDown} className='arrow' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
