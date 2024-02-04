import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home'; 
import Destinations from './Destinations'; 
import Crew from "./Crew"
import Navbar from './NavBar';
import data from '../data/data.json'; 

const App = () => {
  const destinations = data.destinations;
  const crew = data.crew;
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/destinations" element={<Destinations destinations={destinations} />} />
  <Route path="/destinations/:destination" element={<Destinations destinations={destinations} />} />
  <Route path="/crew" element={<Crew crew={crew} />} />
  <Route path="/crew/:crew" element={<Crew crew={crew} />} />
</Routes>
    </BrowserRouter>
  );
};

export default App;
