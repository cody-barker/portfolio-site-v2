function Header() {
  return (
    <div className="header__container">
      <header className="header">
        <img
          className="header__image"
          alt="developer headshot"
          src="/assets/headshot-full-res.png"
        />
        <div className="header__content">
          <h1 className="header__title">Cody Barker</h1>
          <p className="header__text">
            Creative software solutions to optimize your business and enhance
            the user experience.
          </p>
          <button className="header__button">Resume</button>
        </div>
      </header>
    </div>
  );
}

export default Header;
