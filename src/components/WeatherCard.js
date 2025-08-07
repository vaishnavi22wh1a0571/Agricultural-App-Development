import React from 'react';
import './CardStyles.css';

const WeatherCard = ({ data }) => {
    if (!data) return <div>Loading...</div>;

    return (
        <div className="card">
            <h2 className="card-title">Weather Forecast </h2>
            <div className="card-content">
                <p>Temperature: {data.temperature}°C</p>
                <p>Precipitation: {data.precipitation} mm</p>
                <p>Wind Speed: {data.windSpeed} km/h</p>
            </div>
        </div>
    );
};

export default WeatherCard;
