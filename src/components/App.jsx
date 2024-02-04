import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home'; 
import Destinations from './Destinations'; 
import Navbar from './NavBar';
import data from '../data/data.json'; 

const App = () => {
  const destinations = data.destinations;
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/destinations" element={<Destinations destinations={destinations} />} />
  <Route path="/destinations/:destination" element={<Destinations destinations={destinations} />} />
</Routes>
    </BrowserRouter>
  );
};

export default App;
