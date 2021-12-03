import './about.scss';
import { ABOUT } from '../../data/menuElements';
import { aboutMe } from '../../data/aboutMe';

function About() {
  return (
    <div className='about-container' id={ABOUT}>
      <div className='content'>
        <div className='left-container'>
          <p>{aboutMe}</p>
        </div>
        <div className='right-container'>
          <div className='img-container'></div>
        </div>
      </div>
    </div>
  );
}

export default About;
