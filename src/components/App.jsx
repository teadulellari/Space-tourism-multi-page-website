import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Destinations from "./Destinations";
import Crew from "./Crew";
import Tech from "./Tech";
import Navbar from "./NavBar";
import data from "../data/data.json";

const App = () => {
  const destinations = data.destinations;
  const crew = data.crew;
  const tech = data.technology;

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/destinations"
          element={<Destinations destinations={destinations} />}
        />
        <Route
          path="/destinations/:destination"
          element={<Destinations destinations={destinations} />}
        />
        <Route path="/crew" element={<Crew crew={crew} />} />
        <Route path="/crew/:name" element={<Crew crew={crew} />} />
        <Route path="/tech" element={<Tech tech={tech} />} />
        <Route path="/tech/:technology" element={<Tech tech={tech} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
