import { useEffect, useState } from "react";
import WeatherData from "./WeatherData";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import SmartWatch from "./SmartWatch";
import "./App.css";

export default function App() {
  const [weatherData] = useState(new WeatherData());
  const [log, setLog] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const temperature = Math.floor(Math.random() * 100);
      const humidity = Math.floor(Math.random() * 100);
      weatherData.setMeasurements(temperature, humidity);

      const log = `Temperature: ${temperature}°C, Humidity: ${humidity}%`;
      setLog((prevLog) => [...prevLog, log]);
    }, 2000);

    return () => clearInterval(interval);
  }, [weatherData]);

  return (
    <div className="App">
      <h1>Weather Watcher</h1>
      <div style={{ marginBottom: 40, height: 100 }}>
        {log.slice(-5).map((log, index) => (
          <div
            key={index}
            style={{
              fontWeight:
                index === log.slice(-5).length - 1 ? "bold" : "normal",
            }}
          >
            {log}
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
