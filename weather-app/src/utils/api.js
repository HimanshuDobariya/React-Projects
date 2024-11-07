export const getWeatherData = async (endpoint, city) => {
  const url = `https://api.openweathermap.org/data/2.5/${endpoint}?q=${city}&units=metric&appid=${
    import.meta.env.VITE_WEATHER_API_KEY
  }`;
  const response = await fetch(url);
  return await response.json();
};
