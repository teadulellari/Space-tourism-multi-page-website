import React from 'react';
import { Link } from 'react-router-dom';

const Destination = () => {
  return (
    <div>
      <h1>Pick your destination</h1>
      <ul>
        <li><Link to="/destinations/moon">Moon</Link></li>
        <li><Link to="/destinations/mars">Mars</Link></li>
        <li><Link to="/destinations/europa">Europa</Link></li>
        <li><Link to="/destinations/titan">Titan</Link></li>
      </ul>
    </div>
  );
};

export default Destination;
