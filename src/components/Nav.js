import React from "react";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="menu"></Link>
        </li>
        <li>
          <Link to="/countries" className="menu"></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
