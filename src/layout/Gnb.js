import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import './Gnb.css';

function Gnb() {
  const [name, setName] = useState(null);
  const [loginId, setLoginId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setName(decoded.name);
        setLoginId(decoded.loginId);
      } catch (error) {
        console.error('Failed to decode token:', error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    navigate('/');
  };

  const goToMyPage = () => {
    navigate('/mypage', { state: { loginId: loginId } });
  };

  return (
    <div className="gnb">
      {name ? (
        <>
          <span>
            <button onClick={goToMyPage} className="name-btn">{name}</button>
            님 안녕하세요.
          </span>
          <button onClick={handleLogout} className="gnb-btn">로그아웃</button>
        </>
      ) : (
        <Link to="/">로그인</Link>
      )}
    </div>
  );
}

export default Gnb;


