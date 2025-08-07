import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import AlertItem from '../components/AlertItem';

const Alerts = () => {
  const [alertType, setAlertType] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alerts, setAlerts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAlert = {
      id: Date.now(),
      type: alertType,
      message: alertMessage
    };
    setAlerts([...alerts, newAlert]);
    setAlertType('');
    setAlertMessage('');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Alerts</h1>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Create New Alert</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2">Alert Type:</label>
              <select
                value={alertType}
                onChange={(e) => setAlertType(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">Select type</option>
                <option value="pest">Pest</option>
                <option value="weather">Weather</option>
                <option value="soil">Soil</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Alert Message:</label>
              <textarea
                value={alertMessage}
                onChange={(e) => setAlertMessage(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Create Alert</button>
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Recent Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {alerts.map(alert => (
              <AlertItem key={alert.id} alert={alert} />
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Alerts;