import React from 'react';
import { useParams } from 'react-router-dom';
import "../styling/destination.css";

const Destinations = ({ destinations }) => {
  const { destination } = useParams();

  // Check if destinations is available
  if (!destinations) {
    return <div>Destinations data not found</div>;
  }

  const selectedDestination = destinations.find(dest => dest.name.toLowerCase() === destination);

  if (!selectedDestination) {
    return <div>Destination not found</div>;
  }

  const { name, images, description, distance, travel } = selectedDestination;
  return (
    <div>
      <div className="title">
        <span><span className="bold-number-destinations">01</span>Pick your destination</span>
      </div>
      <div>
        <img src={images.png} alt={name} />
      </div>
      <div>
        <ul>
          {/* Map through destinations and create list items */}
          {destinations.map(dest => (
            <li key={dest.name}>{dest.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      <hr />
      <div>
        <h3>Average Distance</h3>
        <h2>{distance}</h2>
      </div>
      <div>
        <h3>EST Travel Time</h3>
        <h2>{travel}</h2>
      </div>
    </div>
  );
};

export default Destinations;
