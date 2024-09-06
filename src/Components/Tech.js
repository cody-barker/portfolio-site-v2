import React from "react";

function Tech({ name, description, icon }) {
  return (
    <div className="tech flex__column--center">
      <div className="tech__icon">{icon}</div>
      <h3 className="tech__name">{name}</h3>
      <p className="tech__description">{description}</p>
    </div>
  );
}

export default Tech;
