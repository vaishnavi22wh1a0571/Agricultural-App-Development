export async function fetchSensorData() {
  const response = await fetch('https://api.sensors.com/data');
  const data = await response.json();
  return data;
}

export async function fetchSatelliteData() {
  const response = await fetch('https://api.satellite.com/images');
  const data = await response.json();
  return data;
}

export async function fetchWeatherData() {
  const apiKey = 'a92aa14559d45e533b8e993d5981440d'; // Replace with your actual API key
  const city = 'HYDERABAD'; // Replace with the desired city name or use dynamic input
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Weather data not available');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null; // or handle the error accordingly
  }

}

// utils/helpers.js
// utils/helpers.js
export const calculateSoilHealthIndicators = (sensorData, satelliteData) => {
  // You can implement more complex calculations here
  return {
      organicMatter: sensorData.organicMatter,
      nutrients: {
          nitrogen: sensorData.nutrients.nitrogen,
          phosphorus: sensorData.nutrients.phosphorus,
          potassium: sensorData.nutrients.potassium,
      },
      microbialActivity: sensorData.microbialActivity,
  };
};




export function calculateCarbonSequestration(sensorData) {
  return sensorData.organicMatter * 0.5; // Example calculation
}

export const suggestNextActions = (soilHealth) => {
  const suggestions = [];

  // Example suggestions based on soil health data
  if (soilHealth.organicMatter < 3) {
      suggestions.push("Consider adding organic matter to improve soil health.");
  }
  if (soilHealth.nutrients.nitrogen < 50) {
      suggestions.push("Increase nitrogen levels through cover cropping or fertilizer.");
  }
  if (soilHealth.microbialActivity < 60) {
      suggestions.push("Enhance microbial activity by adding compost.");
  }

  return suggestions;
};
