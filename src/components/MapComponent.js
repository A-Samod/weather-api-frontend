import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

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
          city,
          lat,
          lng,
          temperature,
          humidity,
          airPressure,
          wind_speed,
          weatherDescriptions,
          observationTime,
          weatherIcons,
          isDay,
        }) => {
          const dynamicIcon = new L.Icon({
            iconUrl: weatherIcons,
            iconSize: [30, 30],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
          });

          return (
            <Marker key={id} position={[lat, lng]} icon={dynamicIcon}>
              <Popup>
                <strong>{city}</strong>
                <br />
                <br />
                Daytime: {isDay ? "Yes" : "No"}
                <br />
                Temperature: {temperature}°C
                <br />
                Humidity: {humidity}%
                <br />
                Air Pressure: {airPressure} hPa
                <br />
                Wind Speed: {wind_speed} km/h
                <br />
                Weather: {weatherDescriptions}
                <br />
                Observation Time: {observationTime}
                <br />
              </Popup>
            </Marker>
          );
        }
      )}
    </MapContainer>
  );
};

export default MapComponent;
