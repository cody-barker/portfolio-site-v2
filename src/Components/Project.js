function Project({ title, subtitle, image, alt }) {
  return (
    <div className="project flex__column--center">
      <img className="project__image" src={image} alt={alt} loading="lazy" />
      <div className="project__content flex__column--center">
        <h3 className="project__title">{title}</h3>
        <p className="project__subtitle">{subtitle}</p>
      </div>
    </div>
  );
}

export default Project;
