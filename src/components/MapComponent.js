import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import sunnyImg from "../images/sunnyWeather.png"
import rainyImg from "../images/rainWeather.webp"

const MapComponent = ({ weatherData }) => {
  return (
    <MapContainer
      center={[7.8731, 80.7718]}
      zoom={8}
      style={{ height: "700px", width: "70%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {weatherData.map(
        ({
          id,
          district,
          lat,
          lng,
          temperature,
          humidity,
          air_pressure,
          updatedAt,
        }) => {
          let dynamicIconUrl = sunnyImg;
            
          if (temperature < 25) {
            dynamicIconUrl = rainyImg;
          }

          const dynamicIcon = new L.Icon({
            iconUrl: dynamicIconUrl,
            iconSize: [30, 30],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
          });

          const formatDate = (timestamp) => {
            const date = new Date(timestamp);
            const offset = 5.5 * 60 * 60 * 1000; // 5 hours and 30 minutes in milliseconds
            const adjustedDate = new Date(date.getTime() - offset);
            const formattedDate = adjustedDate.toLocaleDateString();
            const formattedTime = adjustedDate.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            });
            return `${formattedDate} ${formattedTime}`;
          };

          return (
            <Marker key={id} position={[lat, lng]} icon={dynamicIcon}>
              <Popup>
                <div className="custom-popup">
                  <strong>{district}</strong>
                  <hr />
                  <div className="weather-info">
                    <div>
                      <span>Temperature:</span> {temperature}°C
                    </div>
                    <div>
                      <span>Humidity:</span> {humidity}%
                    </div>
                    <div>
                      <span>Air Pressure:</span> {air_pressure} hPa
                    </div>
                    <div>
                      <span>Updated At:</span> {formatDate(updatedAt)}
                    </div>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        }
      )}
    </MapContainer>
  );
};

export default MapComponent;
