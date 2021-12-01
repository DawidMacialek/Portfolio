import './navbar.scss';
import { topMenu } from '../../data/menuElements';
import { Link } from 'react-scroll';

function NavBar({ showNavBar }) {
  return (
    <div
      className={
        showNavBar ? 'nav-container active-nav-container' : 'nav-container'
      }
    >
      <div className='nav-bar'>
        <ul>
          {topMenu.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  activeClass='active'
                  to={item.id}
                  spy={true}
                  smooth='easeInOutBack'
                  duration={400}
                  isDynamic={true}
                >
                  {item.id}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default NavBar;
