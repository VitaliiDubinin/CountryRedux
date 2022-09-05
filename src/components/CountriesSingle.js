import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const CountriesSingle = () => {
  const location = useLocation();
  const country = location.state.country;
  // return <div>Single</div>;
  return <div>Single</div>;
};

export default CountriesSingle;

{
  /* <Button onClick={()=>Navigate('/countries')}/> */
}
