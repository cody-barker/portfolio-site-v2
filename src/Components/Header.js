import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header__container">
      <header id="header" className="header flex__row--center">
        <img
          className="header__image"
          alt="developer headshot"
          src="/assets/headshot-full-res.png"
        />
        <div className="header__content flex__column--center">
          <h1 className="header__title">Cody Barker</h1>
          <p className="header__text">
            Creative software solutions to optimize your business and enhance
            the user experience.
          </p>
          <a
            href="https://drive.google.com/file/d/1-Ve7W1xTTducqajRfEBZZL0o2ZixIQ8w/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="header__button">Download My Resume</button>
          </a>
        </div>
      </header>
    </div>
  );
}

export default Header;
