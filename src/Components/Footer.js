function Footer() {
  const socials = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/barkercody/",
    },
    {
      name: "GitHub",
      url: "https://github.com/cody-barker",
    },
    {
      name: "Resume",
      url: "https://drive.google.com/file/d/1o59iiJfuttsRIdettlnruERFc63_m-g_/view",
    },
  ];

  const socialLinks = socials.map(({ name, url }) => {
    return (
      <p className="footer__social">
        <a className="footer__social-link" href={url} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </p>
    );
  });

  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <div className="footer__content">
          <h4 className="footer__heading">Contact</h4>
          <p className="footer__content-text">Cody Barker</p>
          <a href="mailto:codybarker.or@gmail.com">codybarker.or@gmail.com</a>
        </div>
        <div className="footer__content">
          <h4 className="footer__heading">Socials</h4>
          {socialLinks}
        </div>
      </footer>
    </div>
  );
}

export default Footer;
