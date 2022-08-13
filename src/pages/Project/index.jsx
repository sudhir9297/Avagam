import React from "react";
import { Routes, Route } from "react-router-dom";
import Carousel from "./PlantWorld";

function Projects() {
  return (
    <Routes>
      <Route path="/plant-world" element={<Carousel />} />
    </Routes>
  );
}

export default Projects;
