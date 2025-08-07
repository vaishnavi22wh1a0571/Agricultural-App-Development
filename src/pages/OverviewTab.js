import React, { useState } from 'react';
import CarbonCreditsCard from '../components/CarbonCreditsCard';
import WeatherCard from '../components/WeatherCard';
import NextActionsCard from '../components/NextActionsCard';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const Overview = () => {
  const [farmName, setFarmName] = useState('');
  const [farmSize, setFarmSize] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const exampleSoilHealth = {
    organicMatter: 2.5,
    nutrients: {
      nitrogen: 40,
      phosphorus: 15,
      potassium: 25,
    },
    microbialActivity: 55,
  };

  const exampleWeatherData = {
    temperature: 22,
    precipitation: 5,
    windSpeed: 10,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ farmName, farmSize });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Farm Overview</h1>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Farm Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2">Farm Name:</label>
              <input
                type="text"
                value={farmName}
                onChange={(e) => setFarmName(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Farm Size (acres):</label>
              <input
                type="number"
                value={farmSize}
                onChange={(e) => setFarmSize(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
          </form>
        </CardContent>
      </Card>

      {submittedData && (
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Submitted Farm Data</CardTitle>
          </CardHeader>
          <CardContent>
            <p><strong>Farm Name:</strong> {submittedData.farmName}</p>
            <p><strong>Farm Size:</strong> {submittedData.farmSize} acres</p>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CarbonCreditsCard sensorData={{ carbonSequestration: 12.5 }} />
        <WeatherCard data={exampleWeatherData} />
        <NextActionsCard soilHealth={exampleSoilHealth} />
      </div>
    </div>
  );
};

export default Overview;
