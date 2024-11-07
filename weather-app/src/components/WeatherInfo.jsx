import React, { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineWaterDrop } from "react-icons/md";
import { FiWind } from "react-icons/fi";
import { useWeather } from "../context/Weather";

const WeatherInfo = () => {
  const weather = useWeather();

  const {
    name,
    main: { temp, humidity },
    weather: [{ id, main }],
    wind: { speed },
  } = weather.data;

  const date = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });

  useEffect(() => {
    weather.getWeatherIcon(id);
  }, [weather.data]);

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between gap-1">
        <div className="flex items-center gap-1">
          <IoLocationOutline className="text-2xl" />
          <h4 className="text-xl">{name}</h4>
        </div>
        <h5>{date}</h5>
      </div>

      <div className="flex items-center justify-between my-2">
        <img src={weather.getWeatherIcon(id)} alt="" className="w-32 h-32" />
        <div className="text-3xl font-semibold text-right">
          <h1>{Math.floor(temp)} °C</h1>
          <h3>{main}</h3>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <MdOutlineWaterDrop className="text-3xl" />
          <div>
            <h5>Humidity</h5>
            <h5>{humidity}</h5>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <FiWind className="text-3xl" />
          <div>
            <h5>Wind Speed</h5>
            <h5>{speed} M/s</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
