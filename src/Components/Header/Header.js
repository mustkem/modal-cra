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
            <li>
              <NavLink exact to="/modal-form">
                Modal Form 1
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/modal-form-2">
                Modal Form 2
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/demos">
                Demos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
