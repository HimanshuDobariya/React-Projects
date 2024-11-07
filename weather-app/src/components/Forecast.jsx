import React from "react";
import { useWeather } from "../context/Weather";

const Forecast = () => {
  const { forecastData } = useWeather();

  return (
    <div className="flex items-center mt-8 gap-2 overflow-x-scroll pb-3 custom-scrollbar">
      {forecastData.map((forecast, index) => (
        <div
          key={index}
          className="min-w-20 bg-[#FFFFFF26] flex flex-col gap-1 items-center rounded-lg p-2 "
        >
          <h5>{forecast.date}</h5>
          <img src={forecast.image} alt="" className="w-10 h-10" />
          <h5>{forecast.temp} °C</h5>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
