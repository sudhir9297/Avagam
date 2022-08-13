import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import { Homepage, Project } from "./pages";

function App(props) {
  return (
    <div style={{ height: "100vh", widht: "100vw" }}>
      {/* <div>
        <nav>
          <ul id="navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/project">Project</Link>
            </li>
          </ul>
        </nav>
      </div> */}

      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/project/*" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
