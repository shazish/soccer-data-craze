import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="header-container">
      <div className="grid row">
        <div className="col-5">
          <h1>Soccer data craze.</h1>
        </div>
        <div className="col-7">
          <nav className="nav-container">
            <NavLink to="/" exact>
              Home
            </NavLink>
            {" | "}
            <NavLink to="/login" exact>
              Login
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Nav;
