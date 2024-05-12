/* App.js */
import { Route, Routes } from "react-router-dom";
import BoardList from "./routes/BoardList";
import Home from "./routes/Home";
import React from "react";
import Login from "./routes/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/board" element={<BoardList/>} />
    </Routes>
  );
}

export default App;
