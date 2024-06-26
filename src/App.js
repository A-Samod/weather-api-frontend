import React, { useState, useEffect } from "react";
import MapComponent from "./components/MapComponent";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [filteredWeatherData, setFilteredWeatherData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        //const response = await fetch("http://localhost:4000/api/v1/weather/details");
        const response = await fetch("https://api.avishka.tech/api/v1/weather/details");
        const data = await response.json();
        console.log("data ===>>",data)
        setWeatherData(data.data);
        setFilteredWeatherData(data.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();

    const interval = setInterval(fetchWeatherData, 5 * 60 * 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm); 
    if (searchTerm.trim() === "") {
      // If search term is empty, reset filtered data to initial data
      setFilteredWeatherData(weatherData);
    } else {
      // Filter weatherData based on searchTerm
      const filteredData = weatherData.filter((district) =>
        district.district.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredWeatherData(filteredData);
    }
  };

  return (
    <div className="app">
      {/* <h1>Weather Map Sri Lanka</h1> */}
      <h1 className="title">Weather Map Sri Lanka</h1>
      <div className="container">
        <MapComponent weatherData={filteredWeatherData} />
        <Sidebar weatherData={weatherData} onSearch={handleSearch} />
      </div>
    </div>
  );
};

export default App;
