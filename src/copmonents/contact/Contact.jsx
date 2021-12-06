import './contact.scss';
import { CONTACT } from '../../data/menuElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneSquare,
  faAt,
  faCopyright,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div className='contact-container' id={CONTACT}>
      <div className='contact-box'>
        <div className='contact'>
          <div className='phone'>
            <div>
              <FontAwesomeIcon
                icon={faPhoneSquare}
                color='black'
                className='phone-number'
              />
            </div>
            <a href='tel:+48514688801'>+48514688801</a>
          </div>
          <div className='email'>
            <div>
              <FontAwesomeIcon
                icon={faAt}
                color='black'
                className='email-address'
              />
            </div>
            <a href='mailto:macialekdawid@gmail.com'>macialekdawid@gmail.com</a>
          </div>
        </div>

        <div className='links-container'>
          <div className='gh-box'>
            <a
              href='https://github.com/DawidMacialek'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faGithub} className='gh-icon' />
            </a>
          </div>
          <div className='linkIn-box'>
            <a
              href='https://www.linkedin.com/in/dawid-macialek-367506222/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faLinkedin} className='linkIn-icon' />
            </a>
          </div>
        </div>
      </div>
      <footer className='footer'>
        <div className='copy'>
          <FontAwesomeIcon icon={faCopyright} className='copy-right-icon' />
          <p>2021</p>
        </div>
        <p>Dawid Maciałek - Portfolio</p>
      </footer>
    </div>
  );
}

export default Contact;
