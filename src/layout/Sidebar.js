import React, { useState } from 'react';
import './Sidebar.css';
import menuConfig from '../constants/menuConfig';
import { Link } from 'react-router-dom';

function Sidebar({ menuKey, location }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const menu = menuConfig[menuKey] || { title: 'Menu', menus: [] };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // This is a temporary solution to map sub-menu items to paths.
  // A more robust solution would be to include the path in the menuConfig.
  const getPath = (mainKey, subItem) => {
    // Simple mapping based on text content.
    // This should be replaced with a more robust solution.
    if (mainKey === 'home') {
      if (subItem === '요약') return '/home';
      if (subItem === '통계') return '/home/statistics';
    }
    if (mainKey === 'board') {
      if (subItem === '공지사항') return '/board';
      if (subItem === '자유게시판') return '/board/free';
    }
    if (mainKey === 'minigame') {
      if (subItem === '불쌍한 사람 찾기') return '/minigame';
    }
    return '#';
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <button onClick={toggleCollapse} className="toggle-btn">
        {isCollapsed ? '▶' : '◀'}
      </button>
      {!isCollapsed && (
        <div>
          <h2>{menu.title}</h2>
          {menu.menus.map((section, index) => (
            <div key={index} className="menu-section">
              <h3>{section.name}</h3>
              <ul>
                {section.sub.map((item, subIndex) => {
                  const path = getPath(menuKey, item);
                  const isActive = location.pathname === path;
                  return (
                    <li key={subIndex} className={isActive ? 'active' : ''}>
                      <Link to={path}>{item}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Sidebar;
