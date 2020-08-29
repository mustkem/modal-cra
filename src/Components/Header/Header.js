import React from "react";
import { NavLink } from "react-router-dom";

import "./style/index.scss";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <ul>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
