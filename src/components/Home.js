import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="homeMain">
        <div className="homeNav">
          <Link to="/">
            <div>HOME</div>
          </Link>
          <Link to="/countries">
            <div>COUNTRIES</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
