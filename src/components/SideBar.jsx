import React, { useState } from "react";
import "../Style/Sidebar.css"; // Fichier CSS pour les styles
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // Suivre quel menu principal est actif

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu); // Afficher/masquer le sous-menu
  };

  return (
    <div className="sidebar-container">
      {/* Bouton pour ouvrir/fermer la sidebar */}
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul className="menu">
          {/* Menu 1 */}
          <li>
            <a href="#!" onClick={() => toggleSubMenu("menu1")}>
            Lazy loading and Suspense
            </a>
            {activeMenu === "menu1" && (
              <ul className="submenu">
                <li>
                  <Link to="/lazy_suspense/about">A propos</Link>
                </li>
                <li>
                  <Link to="/lazy_suspense/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/lazy_suspense/error_boundary">Error boundary</Link>
                </li>
                <li>
                  <Link to="/lazy_suspense/dashboard">Dashboard</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Menu 2 */}
          <li>
            <a href="#!" onClick={() => toggleSubMenu("menu2")}>
              OffCanvas
            </a>
            {activeMenu === "menu2" && (
              <ul className="submenu">
                <li>
                    <Link to="/offCanvas/2">offCanvas2</Link>
                </li>
                <li>
                    <Link to="/offCanvas/1">offCanvas1</Link>
                </li>
              </ul>
            )}
          </li>
          {/* Menu 3 */}
          <li>
            <a href="#!" onClick={() => toggleSubMenu("menu3")}>
              Exercises API
            </a>
            {activeMenu === "menu3" && (
              <ul className="submenu">
                <li>
                  <Link to="/api/weather_app">Weather App</Link>
                </li>
                <li>
                  <Link to="/api/chatbot">Chat to Bot</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
