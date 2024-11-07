import { createContext, useContext, useState } from "react";
import { getWeatherData } from "../utils/api";
import {
  atmosphere,
  clear,
  drizzle,
  rain,
  snow,
  thunderstorm,
  clouds,
} from "../utils/constant";

export const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");
  const [forecastData, setForeCastData] = useState({});

  const fetchData = async () => {
    const weatherResult = await getWeatherData("weather", search);
    const forecastResult = await getWeatherData("forecast", search);
    setData(weatherResult);

    const sortedListData = forecastResult.list
      .filter((forecastWeather) => forecastWeather.dt_txt.includes("12:00:00"))
      .map((item) => {
        return {
          date: new Date(item.dt_txt).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
          }),
          temp: Math.floor(item.main.temp),
          image: getWeatherIcon(item.weather[0].id),
        };
      });

    setForeCastData(sortedListData);
  };

  const getWeatherIcon = (id) => {
    if (id <= 232) return thunderstorm;
    if (id <= 321) return drizzle;
    if (id <= 531) return rain;
    if (id <= 622) return snow;
    if (id <= 781) return atmosphere;
    if (id <= 800) return clear;
    else return clouds;
  };

  return (
    <WeatherContext.Provider
      value={{
        data,
        search,
        setSearch,
        fetchData,
        forecastData,
        getWeatherIcon,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
