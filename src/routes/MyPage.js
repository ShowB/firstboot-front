import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../layout/Header';
import MainContent from '../layout/MainContent';
import './Home.css';

function MyPage() {
  const location = useLocation();
  const loginId = location.state?.loginId;

  return (
    <div className="home-container">
      <Header />
      <div className="main-layout">
        <MainContent>
          <h2>My Page</h2>
          {loginId ? (
            <p>Your Login ID is: {loginId}</p>
          ) : (
            <p>Login ID not found.</p>
          )}
        </MainContent>
      </div>
    </div>
  );
}

export default MyPage;
