import React, { useState, useEffect } from 'react';
import SoilHealthTab from '../pages/SoilHealthTab';
import WeatherCard from './WeatherCard';
import CarbonCreditsCard from './CarbonCreditsCard';
import NextActionsCard from './NextActionsCard';
import { fetchSensorData, fetchSatelliteData, fetchWeatherData } from '../utils/helpers';
import React from 'react';
import './Dashboard.css'; // Create a CSS file for responsive layout


const Dashboard = () => {
  return (
    <div className="dashboard-container">
        <div className="weather-card">
            <WeatherCard data={weatherData} />
        </div>
        <div className="soil-health-card">
            <SoilHealthTab sensorData={sensorData} />
        </div>
        <div className="carbon-credits-card">
            <CarbonCreditsCard sensorData={sensorData} />
        </div>
        <div className="next-actions-card">
            <NextActionsCard sensorData={sensorData} weatherData={weatherData} />
        </div>
    </div>
);
    const [sensorData, setSensorData] = useState(null);
    const [satelliteData, setSatelliteData] = useState(null);
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        async function getData() {
            const sensorResponse = await fetchSensorData();
            setSensorData(sensorResponse);

            const satelliteResponse = await fetchSatelliteData();
            setSatelliteData(satelliteResponse);

            const weatherResponse = await fetchWeatherData();
            setWeatherData(weatherResponse);
        }
        getData();
    }, []);

    return (
        <div>
            <h1>Regenerative Agriculture Dashboard</h1>
            <WeatherCard data={weatherData} />
            <SoilHealthTab sensorData={sensorData} satelliteData={satelliteData} />
            <CarbonCreditsCard sensorData={sensorData} />
            <NextActionsCard sensorData={sensorData} weatherData={weatherData} />
        </div>
    );
};

export default Dashboard;
