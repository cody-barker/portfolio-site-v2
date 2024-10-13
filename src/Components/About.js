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
          <div className="about__texts">
            <p className="about__text">
              I develop web applications that automate routine tasks and drive
              efficiency, giving users more time to focus on strategic,
              high-level challenges. Whether it's integrating IoT devices for
              real-time data insights or creating custom software to tackle
              complex business problems, I'm ready to help you find the right
              solution.
            </p>
            <p className="about__text">
              I leverage a decade of experience in smart agriculture and habitat
              restoration, where I engineered data-driven systems for industry
              leaders. From designing complex irrigation systems, breeding
              programs, and scientific studies, to leading high-impact teams and
              consulting internationally, this background sharpened my ability
              to design efficient, scalable software solutions. I apply the same
              problem-solving mindset to software engineering as I did in
              optimizing real-world systems.
            </p>
            <p className="about__text">
              If you're looking for a web developer with aptitude, who is
              thorough and a joy to work with, let's connect to explore how I
              can help drive your next project forward.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
