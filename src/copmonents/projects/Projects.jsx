import './projects.scss';
import { PROJECTS } from '../../data/menuElements';
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from 'react-router-dom';
import GameProjects from './projectTypes/gameProjects/GameProjects';
import WebProjects from './projectTypes/webProjects/WebProjects';
import AppProjects from './projectTypes/appProjects/AppProjects';

function Projects() {
  return (
    <Router>
      <div className='projects-container' id={PROJECTS}>
        <div className='projects'>
         
          <nav className='nav-projects-container'>
            <ul className='ul'>
              <li>
                <NavLink to='/game-projects'>Game</NavLink>
              </li>
              <li>
                <NavLink to='/web-projects'>Web</NavLink>
              </li>
              <li>
                <NavLink to='/app-projects'>App</NavLink>
              </li>
            </ul>
          </nav>
          <div className='content'>
            <Routes>
              <Route path='/game-projects' element={<GameProjects />} />
              <Route path='/web-projects' element={<WebProjects />} />
              <Route path='/app-projects' element={<AppProjects />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Projects;
