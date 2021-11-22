import { useEffect, useRef } from 'react';
import { init } from 'ityped';
import './home.scss';
import 'material-icons/iconfont/material-icons.css';
import { quote } from '../../data/homePage';
import { HOME, ABOUT } from '../../data/menuElements';
import { Link, animateScroll as scroll } from 'react-scroll';

function Home() {
  const refToQuote = useRef();
  const refToAuthor = useRef();

  useEffect(() => {
    const isTypping = 150;
    init(refToQuote.current, {
      showCursor: false,
      strings: [quote[0]],
      typeSpeed: isTypping,
      loop: false,
      cursorChar: '|',
      onFinished: function () {
        init(refToAuthor.current, {
          showCursor: false,
          strings: [quote[1]],
          typeSpeed: 50,
          loop: false,
          cursorChar: '|',
          startDelay: 1000,
        });
      },
    });
  }, []);

  return (
    <div className='home-container' id={HOME}>
      <div className='home'>
        <div className='quote-container'>
          <span className='quote' ref={refToQuote}></span>
          <span className='author' ref={refToAuthor}></span>
        </div>
        <div className='welcome'>
          <h1>
            Jestem Dawid Maciałek,
            <br />
            Witam Cię na moim portfolio!
          </h1>
        </div>
        <div className='arrow-container'>
          <Link to={ABOUT} spy={true} smooth='easeInOutBack' duration={600}>
            <span class='material-icons-round arrow'>keyboard_arrow_down</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
