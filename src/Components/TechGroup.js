import React from "react";
import Tech from "./Tech";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { SiRubyonrails } from "react-icons/si";
import { IoCloudUploadOutline } from "react-icons/io5";

function TechGroup() {
  const techArray = [
    {
      name: "React",
      description:
        "Crafting dynamic, responsive user interfaces with React's component-based architecture.",
      icon: <FaReact size={50} />,
    },
    {
      name: "JavaScript",
      description:
        "Building interactive and high-performance web applications with vanilla JavaScript and ES6+ features.",
      icon: <IoLogoJavascript size={50} />,
    },
    {
      name: "HTML",
      description:
        "Structuring web content efficiently using HTML5 for semantic and accessible markup.",
      icon: <AiOutlineHtml5 size={50} />,
    },
    {
      name: "CSS",
      description:
        "Designing visually appealing layouts with CSS3, including flexbox, grid, and responsive design techniques.",
      icon: <TbBrandCss3 size={50} />,
    },
    {
      name: "Ruby on Rails",
      description:
        "Developing robust, scalable back-end systems with Rails' convention over configuration philosophy.",
      icon: <SiRubyonrails size={50} />,
    },
    {
      name: "IoT",
      description:
        "Integrating and programming IoT devices for innovative solutions in smart technology and automation.",
      icon: <IoCloudUploadOutline size={50} />,
    },
  ];

  const techComps = techArray.map((tech, index) => (
    <Tech key={index} {...tech} />
  ));

  return (
    <div className="tech-group flex__column--center">
      <h3 className="tech-group__title">Tech</h3>
      {techComps}
    </div>
  );
}

export default TechGroup;
