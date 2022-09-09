import React from "react";
import { Routes, Route } from "react-router-dom";
import { Clockify } from "./Components/Clockify";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Clockify />}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
}
