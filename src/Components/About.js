function About() {
  return (
    <div className="about-wrapper">
      <div className="about">
        <h1 className="about__title">About Me</h1>
        <div className="about__content">
          <img
            className="about__image"
            src="/assets/cody_greenhouse.jpg"
            alt="cody in the greenhouse"
          />
          <p className="about__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui earum
            nobis atque corporis voluptatibus tempore fugit voluptas vero velit
            explicabo asperiores molestiae modi, distinctio consectetur dicta
            beatae. Aut, est enim.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
