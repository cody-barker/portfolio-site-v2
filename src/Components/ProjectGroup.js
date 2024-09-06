import Project from "./Project";

function ProjectGroup() {
  const projects = [
    {
      title: "Ash Creek Forest Management",
      subtitle:
        "Custom inventory management software designed to streamline record keeping and secure handling of hazardous chemicals.",
      image: "/assets/acfm-pesticide-inventory-app-demo-preview.png",
      alt: "Preview of the Ash Creek Forest Management chemical inventory application.",
    },
    {
      title: "Soil Moisture Sensors for Ash Creek Nursery",
      subtitle:
        "Specialized soil moisture sensors decrease water consumption and improve plant health at a local native plant nursery.",
      image: "/assets/soil-moisture-sensors-preview.png",
      alt: "Preview of the soil moisture sensor dashboard in Grafana.",
    },
    {
      title: "Portland Native Plants",
      subtitle:
        "An extensive native plant resource that guides project managers and home gardeners in making informed plant selections.",
      image: "/assets/portland-native-plants-preview.png",
      alt: "Preview of the native plants table in this web app.",
    },
    {
      title: "Addressable LED Rock Climbing Wall",
      subtitle:
        "This WebSocket application and lighting controller empowers users to create, save, and share personalized climbing routes at a fraction of the cost of commercial alternatives.",
      image: "/assets/led-rock-wall-app-preview.png",
      alt: "Preview of the websocket UI for controlling addressable LEDs.",
    },
    {
      title: "Trailscan",
      subtitle:
        "A web app designed for hikers to add and share their favorite trails with ease.",
      image: "/assets/trailscan-preview-image.png",
      alt: "Preview of the Trailscan homepage.",
    },
  ];

  const projectCards = projects.map((project, index) => {
    return <Project key={index} {...project} />;
  });

  return (
    <div id="projects" className="project__group flex__column--center">
      <div className="projects__content flex__column--center">
        <h2 className="projects__title">Projects</h2>
        <p className="projects__subtitle">
          Driven by simplicity and environmental awareness.
        </p>
      </div>
      {projectCards}
    </div>
  );
}

export default ProjectGroup;
