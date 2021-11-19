import { useEffect, useRef } from 'react';
import { init } from 'ityped';
import './home.scss';
import 'material-icons/iconfont/material-icons.css';
import { quote } from '../../data/homePage';
import { ABOUT } from '../../data/menuElements';

function Home({}) {
  // const [letterQuote, setLetterQuote] = useState([]);
  const refToQuote = useRef();
  const refToAuthor = useRef();
  // quote typing
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
    <div className='home-container' id='home'>
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
          <a href={`#${ABOUT}`}>
            <span class='material-icons-round arrow'>keyboard_arrow_down</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
