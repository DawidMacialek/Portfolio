import "./navbar.scss";
import { topMenu } from "../../data/menuElements";

function NavBar({ showNavBar, selectedAtNav }) {
  return (
    <div
      className={
        showNavBar ? "nav-container active-nav-container" : "nav-container"
      }
    >
      <div className="nav-bar">
        <ul>
          {topMenu.map((item) => {
            return (
              <li
                key={item.id}
                className={item.id === selectedAtNav ? "selected" : ""}
              >
                <a href={`#${item.id}`}>{item.id}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default NavBar;
