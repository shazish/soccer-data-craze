import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav-container">
      <NavLink to="/" exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/login" exact>
        Login
      </NavLink>
    </nav>
  );
}

export default Nav;
