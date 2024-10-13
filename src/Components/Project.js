function Project({ title, subtitle, image, alt, github, demo }) {
  return (
    <div className="project flex__column--center">
      <img className="project__image" src={image} alt={alt} loading="lazy" />
      <div className="project__content flex__column--center">
        <h3 className="project__title">{title}</h3>
        <p className="project__subtitle">{subtitle}</p>
        <div className="project__buttons">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <button className="project__button">GitHub</button>
          </a>
          {demo ? (
            <a href={demo} target="_blank" rel="noopener noreferrer">
              <button className="project__button">Demo</button>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Project;
