import { useEffect, useState } from "react";
import WeatherData from "./WeatherData";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import SmartWatch from "./SmartWatch";
import "./App.css";

export default function App() {
  const [weatherData] = useState(new WeatherData());

  useEffect(() => {
    console.log("Setting measurements");
    weatherData.setMeasurements(80, 65);
    weatherData.setMeasurements(82, 70);
  }, [weatherData]);

  return (
    <div className="App">
      <h1>Weather Watcher</h1>
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
