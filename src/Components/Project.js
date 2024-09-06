function Project({ title, subtitle, image, alt }) {
  return (
    <div className="project">
      <img className="project__image" src={image} alt={alt} />
      <div className="project__content">
        <h3 className="project__title">{title}</h3>
        <p className="project__subtitle">{subtitle}</p>
      </div>
    </div>
  );
}

export default Project;
