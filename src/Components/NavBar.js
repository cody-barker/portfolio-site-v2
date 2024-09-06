import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav flex__row--center">
      <ul className="nav__list flex__row--center">
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
          <NavLink to="#contact" className="nav__link">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
