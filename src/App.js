import React, { useState } from "react";
import MapComponent from "./components/MapComponent";

const App = () => {
  const [weatherData, setWeatherData] = useState([
    {
      id: 1,
      city: "Colombo",
      lat: 6.9271,
      lng: 79.8612,
      temperature: 28,
      humidity: 75,
      airPressure: 1012,
      wind_speed: 12,
      weatherDescriptions: "Partly cloudy",
      observationTime: "2024-04-01 12:00:00",
      weatherIcons: "https://example.com/icon.png",
      isDay: true,
    },
    {
      id: 2,
      city: "Kandy",
      lat: 7.2906,
      lng: 80.6337,
      temperature: 25,
      humidity: 70,
      airPressure: 1013,
      wind_speed: 10,
      weatherDescriptions: "Cloudy",
      observationTime: "2024-04-01 12:00:00",
      weatherIcons: "https://example.com/icon.png",
      isDay: false,
    },
    // Add more weather data objects as needed
  ]);

  return (
    <div>
      <h1>Weather Map Sri Lanka</h1>
      <MapComponent weatherData={weatherData} />
    </div>
  );
};

export default App;
