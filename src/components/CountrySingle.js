import React from "react";
// import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const CountrySingle = () => {
  const location = useLocation();
  const country = location.state.data;

  return (
    <div className="singlecard">
      <h1>{country.name.common}</h1>
      <img className="singcardimage" src={country.flag} alt={country.name.common} />
      <img className="flagsq" src={country.flags.png} alt={country.name.common} />
    </div>
  );
};
export default CountrySingle;
