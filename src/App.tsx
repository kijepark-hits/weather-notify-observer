import { useEffect, useState } from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import SmartWatch from "./SmartWatch";
import WeatherData from "./WeatherData";
import "./App.css";

export default function App() {
  const [weatherData] = useState(new WeatherData());
  const [log, setLog] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const temperature = Math.floor(Math.random() * 100);
      const humidity = Math.floor(Math.random() * 100);
      weatherData.setMeasurements(temperature, humidity);

      const now = new Date().toLocaleTimeString();
      const newLog = `${now} - Temperature: ${temperature}°C, Humidity: ${humidity}%`;
      setLog((prevLog) => [...prevLog, newLog].slice(-5));
    }, 2000);

    return () => clearInterval(interval);
  }, [weatherData]);

  return (
    <div className="App">
      <h1>Weather</h1>
      <div style={{ marginBottom: 40, height: 100 }}>
        {log.map((entry, index) => (
          <div
            key={index}
            style={{ fontWeight: index === log.length - 1 ? "bold" : "normal" }}
          >
            {entry}
          </div>
        ))}
      </div>
      <div style={{ marginBottom: 20 }}>
        <Desktop weatherData={weatherData} />
      </div>
      <div style={{ marginBottom: 20 }}>
        <Mobile weatherData={weatherData} />
      </div>
      <div style={{ marginBottom: 20 }}>
        <SmartWatch weatherData={weatherData} />
      </div>
    </div>
  );
}
