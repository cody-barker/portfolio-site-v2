import { Link } from "react-scroll";

function NavBar() {
  return (
    <nav className="nav flex__row--center">
      <ul className="nav__list flex__row--center">
        <li className="nav__item">
          <Link to="about" smooth={true} duration={500} className="nav__link">
            About
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="nav__link"
          >
            Projects
          </Link>
        </li>
        <li className="nav__item">
          <Link to="tech" smooth={true} duration={1000} className="nav__link">
            Tech
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="contact"
            smooth={true}
            duration={2000}
            className="nav__link"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
