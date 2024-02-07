import React, {useEffect} from "react";
import { NavLink, useParams } from "react-router-dom";
import "../styling/global.css";
import "../styling/tech.css";
import bg from "../assets/technology/background-technology-mobile.jpg";
import bgDesktop from "../assets/technology/background-technology-desktop.jpg";
import bgTablet from "../assets/technology/background-technology-tablet.jpg";



const Tech = ({ tech }) => {
    const { technology } = useParams();
    const formattedTechName = technology ? technology.replace(/-/g, ' ') : "";

    // Set default tech to "Launch vehicle" if no tech is provided
    const selectedTech = tech.find((technology) =>
      technology.name.toLowerCase() === formattedTechName
    ) || tech.find((technology) => technology.name.toLowerCase() === "launch vehicle");

    if (!selectedTech) {
      return <div>Technology not found</div>;
    }

    const { name, images, description } = selectedTech;

    useEffect(() => {
        document.documentElement.style.setProperty(
          '--bodyImg',
          `url("${bg}") center/cover no-repeat`
        );
      }, [images.bg]);

  return (
    <div className="tech-container">
      <div className="title">
        <span>
          <span className="bold-number">03 </span>Space Launch 101
        </span>
      </div>
      <div>
      <img  src={new URL(images.portrait, import.meta.url).href} alt={name} />
      </div>
      <div>
        <ul>
          {tech.map((technology, index) => (
            <li key={technology.name}>
              <NavLink
                to={`/tech/${technology.name.toLowerCase().replace(/\s+/g, '-')}`}
                activeclassname="tech-active-link"
              >
                {technology.name === selectedTech.name ? (
                  <div className="circle-number active">{index + 1}</div>
                ) : (
                  <div className="circle-number">{index + 1}</div>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="tech-full-data">
      <div className="tech-data">
        <h3>The Technology...</h3>
        <h1>{name}</h1>
      </div>
      <div>
        <p>{description}</p>
      </div>
      </div>
    </div>
  );
};

export default Tech;
