import React from "react";

const Weatherwindow = (data, capweather) => {
  return (
    <>
      {/* <h1>{data.weather.main}</h1>
      <h1>{data.main.temp}</h1>
      <h1>{data.main.feels_like}</h1>
      <h1>{data.main.humidity}</h1> */}
      <h1>{capweather.main.temp}</h1>
      <h1>{capweather.weather.main}</h1>
      <h1>{capweather.main.feels_like}</h1>
      <h1>{capweather.main.humidity}</h1>
    </>
  );
};

export default Weatherwindow;
