import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="#about" className="nav__link">
            About
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="#projects" className="nav__link">
            Projects
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="#socials" className="nav__link">
            Socials
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
