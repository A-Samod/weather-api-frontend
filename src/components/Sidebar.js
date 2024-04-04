import React, { useState } from "react";
import "./styles.css"; 
const Sidebar = ({ weatherData, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const filteredDistricts = weatherData.filter((district) =>
    district.district.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const offset = 5.5 * 60 * 60 * 1000; // 5 hours and 30 minutes in milliseconds
    const adjustedDate = new Date(date.getTime() - offset);
    const formattedDate = adjustedDate.toLocaleDateString();
    // const formattedTime = adjustedDate.toLocaleTimeString();
    const formattedTime = adjustedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return `${formattedDate} ${formattedTime}`;
  };

  console.log("filterdata ====>>>" ,filteredDistricts )

  return (
    <div className="sidebar">
      <input
        type="text"
        placeholder="Search District"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="district-list">
        {filteredDistricts.map((district) => (
          <div key={district.id} className="district">
            <h3>{district.district}</h3>
            {/* <p>Temperature: {district.temperature}°C</p>
            <p>Humidity: {district.humidity}%</p>
            <p>Air Pressure: {district.air_pressure} hPa</p> */}
            <div className="weather-data">
              <p>Temperature: {district.temperature}°C</p>
              <p>Humidity: {district.humidity}%</p>
              <p>Air Pressure: {district.air_pressure} hPa</p>
              <p>Upadated At: {formatDate(district.updatedAt)} </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
