import React from "react";
import InputComponent from "./components/InputComponent";
import WeatherInfo from "./components/WeatherInfo";
import Forecast from "./components/Forecast";
import SearchMsg from "./components/SearchMsg";
import NotFound from "./components/NotFound";
import { useWeather } from "./context/Weather";

const App = () => {
  const weather = useWeather();

  return (
    <div className="w-80 h-[490px] p-6 bg-gradient-to-t from-[#00000080] to-[#FFFFFF26] rounded-xl backdrop-blur-3xl text-white">
      <InputComponent />
      {!weather.data ? (
        <SearchMsg />
      ) : weather.data.cod != 200 ? (
        <NotFound />
      ) : (
        <>
          <WeatherInfo />
          <Forecast />
        </>
      )}
    </div>
  );
};

export default App;
