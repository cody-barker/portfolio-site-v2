import { Link } from "react-scroll";

function NavBar() {
  const navItems = [
    { to: "about", text: "About", duration: 500 },
    { to: "projects", text: "Projects", duration: 500 },
    { to: "tech", text: "Tech", duration: 1000 },
    { to: "footer", text: "Contact", duration: 1000 },
  ];

  return (
    <nav className="nav flex__row--center">
      <ul className="nav__list flex__row--center">
        {navItems.map(({ to, text, duration }, index) => (
          <li key={index} className="nav__item">
            <Link
              to={to}
              smooth={true}
              duration={duration}
              className="nav__link"
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
