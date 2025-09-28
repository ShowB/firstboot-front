/* App.js */
import { Route, Routes } from "react-router-dom";
import BoardList from "./routes/BoardList";
import Home from "./routes/Home";
import React from "react";
import Login from "./routes/Login";
import Minigame from "./routes/Minigame";
import MyPage from "./routes/MyPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/board" element={<BoardList/>} />
      <Route path="/minigame" element={<Minigame/>} />
      <Route path="/mypage" element={<MyPage/>} />
    </Routes>
  );
}

export default App;
