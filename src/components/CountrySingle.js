import React from "react";
// import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const CountrySingle = () => {
  const location = useLocation();
  const country = location.state.country;

  return (
    <div className="singlecard">
      <h1>{country.name}</h1>
      <img className="singcardimage" src={country.image} alt={country.name} />
      <img className="flagsq" src={country.country.flags.png} alt={country.name.common} />
    </div>
  );
};
export default CountrySingle;
