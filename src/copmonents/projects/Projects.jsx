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
                <NavLink exact to='/Portfolio/'>
                  wszystkie
                </NavLink>
              </li>
              <li>
                <NavLink to='/Portfolio/game-projects'>mini gry</NavLink>
              </li>
              <li>
                <NavLink to='/Portfolio/web-projects'>strony</NavLink>
              </li>
              <li>
                <NavLink to='/Portfolio/app-projects'>aplikacje</NavLink>
              </li>
            </ul>
          </nav>
          <div className='content'>
            <Routes>
              <Route path='/Portfolio' element={<ItemList dataItems={all} />} />
              <Route
                path='/Portfolio/game-projects'
                element={<ItemList dataItems={games} />}
              />
              <Route
                path='/Portfolio/web-projects'
                element={<ItemList dataItems={webs} />}
              />
              <Route
                path='/Portfolio/app-projects'
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
