import { useEffect, useState } from "react";
import WeatherData from "./WeatherData";

interface Props {
  weatherData: WeatherData;
}

export default function SmartWatch({ weatherData }: Props) {
  const [temperature, setTemperature] = useState<number>(0);
  const [humidity, setHumidity] = useState<number>(0);

  const update = (temp: number, hum: number) => {
    console.log(`Current conditions: ${temp}F degrees and ${hum}% humidity`);
    setTemperature(temp);
    setHumidity(hum);
  };

  useEffect(() => {
    console.log("Registering observer");
    weatherData.registerObserver({ update });
  }, [weatherData]);

  return (
    <fieldset>
      <legend>Smart Watch</legend>
      <p>{`Temperature: ${temperature}F`}</p>
      <p>{`Humidity: ${humidity}%`}</p>
    </fieldset>
  );
}
