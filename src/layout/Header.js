import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Gnb from './Gnb';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="logo">
        <Link to="/home">Firstboot</Link>
      </div>
      <nav>
        <ul>
          <li className={location.pathname === '/home' ? 'active' : ''}>
            <Link to="/home">Home</Link>
          </li>
          <li className={location.pathname === '/board' ? 'active' : ''}>
            <Link to="/board">Board</Link>
          </li>
          <li className={location.pathname === '/minigame' ? 'active' : ''}>
            <Link to="/minigame">미니게임</Link>
          </li>
          <li className={location.pathname === '/partner' ? 'active' : ''}>
            <Link to="/partner">파트너관리</Link>
          </li>
        </ul>
      </nav>
      <div className="gnb-wrapper">
        <Gnb />
      </div>
    </header>
  );
}

export default Header;
