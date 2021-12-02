import './projects.scss';
import { PROJECTS } from '../../data/menuElements';
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from 'react-router-dom';
import ItemList from './itemList/ItemList';
import { games } from '../../data/Projects/games.js';
import { apps } from '../../data/Projects/apps.js';
import { webs } from '../../data/Projects/webs.js';

const all = games.concat(apps.concat(webs));
function Projects() {
  return (
    <Router>
      <div className='projects-container' id={PROJECTS}>
        <div className='projects'>
          <nav className='nav-projects-container'>
            <ul className='ul'>
              <li>
                <NavLink exact to='/'>
                  wszystkie
                </NavLink>
              </li>
              <li>
                <NavLink to='/game-projects'>mini gry</NavLink>
              </li>
              <li>
                <NavLink to='/web-projects'>strony</NavLink>
              </li>
              <li>
                <NavLink to='/app-projects'>aplikacje</NavLink>
              </li>
            </ul>
          </nav>
          <div className='content'>
            <Routes>
              <Route path='/' element={<ItemList dataItems={all} />} />
              <Route
                path='/game-projects'
                element={<ItemList dataItems={games} />}
              />
              <Route
                path='/web-projects'
                element={<ItemList dataItems={webs} />}
              />
              <Route
                path='/app-projects'
                element={<ItemList dataItems={apps} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Projects;
