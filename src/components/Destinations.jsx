import React, {useEffect} from "react";
import { useParams, NavLink } from "react-router-dom";
import "../styling/destination.css";
import "../styling/global.css";
import bg from "../assets/destination/background-destination-mobile.jpg"

const Destinations = ({ destinations }) => {
  const { destination } = useParams();


  // Check if destinations is available
  if (!destinations) {
    return <div>Destinations data not found</div>;
  }

  // Set default destination to "Moon" if no destination is provided
  const selectedDestination = destination
    ? destinations.find((dest) => dest.name.toLowerCase() === destination)
    : destinations.find((dest) => dest.name.toLowerCase() === "moon");

  if (!selectedDestination) {
    return <div>Destination not found</div>;
  }

  const { name, images, description, distance, travel } = selectedDestination;

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--bodyImg',
      `url("${bg}") center/cover no-repeat`
    );
  }, [images.bg]);

  return (
    <div className="dest-wrapper">
    <div className="dest-container">
      <div className="title">
        <span>
          <span className="bold-number">01 </span>Pick your destination
        </span>
      </div>
      <div className="moon-image">
        <img width={"170px"} height={"170px"} src={new URL(images.png, import.meta.url).href} alt={name} />
      </div>
      <div>
        <ul>
          {destinations.map((dest) => (
            <li key={dest.name}>
              <NavLink
                to={`/destinations/${dest.name.toLowerCase()}`}
                activeclassnamee="active-link"
              >
                {dest.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      <hr />
      <div>
        <h3>Avg. Distance</h3>
        <h2>{distance}</h2>
      </div>
      <div>
        <h3>EST Travel Time</h3>
        <h2>{travel}</h2>
      </div>
    </div>
    </div>
  );
};

export default Destinations;
