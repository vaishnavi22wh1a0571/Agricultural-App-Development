import React from 'react';
import './CardStyles.css';

const CarbonCreditsCard = ({ sensorData }) => {
    if (!sensorData) return <div>Loading...</div>;

    const carbonSequestration = sensorData.carbonSequestration;

    return (
        <div className="card">
            <h2 className="card-title">Carbon Credits </h2>
            <div className="card-content">
                <p>Carbon Sequestration: {carbonSequestration} tons</p>
                <p>Eligible for Carbon Credits</p>
            </div>
        </div>
    );
};

export default CarbonCreditsCard;
