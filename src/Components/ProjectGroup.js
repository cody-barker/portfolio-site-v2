import Project from "./Project";

function ProjectGroup() {
  const projects = [
    {
      title: "Ash Creek Forest Management",
      subtitle:
        "Custom inventory management software designed to streamline record keeping and ensure secure handling of hazardous chemicals.",
      image: "/assets/acfm-pesticide-inventory-app-demo-preview.png",
    },
    {
      title: "Soil Moisture Sensors for Ash Creek Nursery",
      subtitle:
        "Specialized soil moisture sensors decrease water consumption and improve plant health at a local native plant nursery.",
      image: "/assets/soil-moisture-sensors-preview.png",
    },
    {
      title: "Portland Native Plants",
      subtitle:
        "An extensive native plant resource that guides project managers and home gardeners in making informed plant selections.",
      image: "/assets/portland-native-plants-preview.png",
    },
    {
      title: "Addressable LED Rock Climbing Wall",
      subtitle:
        "This WebSocket application and lighting controller empowers users to create, save, and share personalized climbing routes at a fraction of the cost of commercial alternatives.",
      image: "/assets/led-rock-wall-app-preview.png",
    },
    {
      title: "Trailscan",
      subtitle:
        "A web app designed for hikers to add and share their favorite trails with ease.",
      image: "/assets/trailscan-preview-image.png",
    },
  ];

  const projectCards = projects.map((project) => {
    <Project />;
  });

  return <div>ProjectGroup</div>;
}

export default ProjectGroup;
