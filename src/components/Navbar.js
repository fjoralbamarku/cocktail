import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="navDiv">
        <ul>
          <li className="navLinks">
            <Link to="/">Home</Link>
          </li>
          <li className="navLinks">
            <Link to="/About">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
