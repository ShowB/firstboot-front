import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import MainContent from "../layout/MainContent";
import './Home.css';

function Home() {
  const location = useLocation();

  return (
    <div className="home-container">
      <Header/>
      <div className="main-layout">
        <Sidebar menuKey='home' location={location}/>
        <MainContent>
          <h1>홈 화면</h1>
          <p>환영합니다!</p>
        </MainContent>
      </div>
    </div>
  );
}

export default Home;
