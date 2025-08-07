import React from 'react';
import { calculateSoilHealthIndicators } from '../utils/helpers';
import './SoilHealthTab.css';

// Example sensor data and satellite data
const exampleSensorData = {
    organicMatter: 2.5,
    nutrients: {
        nitrogen: 45,
        phosphorus: 15,
        potassium: 25,
    },
    microbialActivity: 50,
};

const exampleSatelliteData = {
    moisture: 30,
    vegetationIndex: 0.8,
};

const SoilHealthTab = () => {
    // Calculate soil health indicators using example data
    const soilHealth = calculateSoilHealthIndicators(exampleSensorData, exampleSatelliteData);

    return (
        <div
            className="relative bg-cover bg-center h-screen flex items-center justify-center"
            style={{ backgroundImage: "url('/soilhealth.jpg')" }} // Image from public folder
        >
            {/* Overlay Content with Updated Colors */}
            <div className="bg-green-900 bg-opacity-70 p-8 rounded-lg text-center shadow-lg">
                <h2 className="text-5xl font-bold text-yellow-300 mb-6">
                    Regenerative Agriculture Dashboard
                </h2>
                <p className="text-lg text-white mb-2">
                    <strong>Organic Matter:</strong> {soilHealth.organicMatter}%
                </p>
                <p className="text-lg text-white mb-2">
                    <strong>Nitrogen:</strong> {soilHealth.nutrients.nitrogen} mg/kg
                </p>
                <p className="text-lg text-white">
                    <strong>Microbial Activity:</strong> {soilHealth.microbialActivity}
                </p>
            </div>
        </div>
    );
};

export default SoilHealthTab;
