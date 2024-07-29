import { useState } from "react";
import WeatherData from "./WeatherData";

interface Props {
  weatherData: WeatherData;
}

export default function SmartWatch({ weatherData }: Props) {
  const [registered, setRegistered] = useState<boolean>(false);
  const [temperature, setTemperature] = useState<number>(0);
  const [humidity, setHumidity] = useState<number>(0);

  const [observer] = useState({
    update: (temp: number, hum: number) => {
      console.log(`Smart Watch: ${temp}F degrees and ${hum}% humidity`);
      setTemperature(temp);
      setHumidity(hum);
    },
  });

  const onClick = () => {
    if (!registered) {
      console.log("Registering observer");
      weatherData.registerObserver(observer);
      setRegistered(true);
    } else {
      console.log("Unregistering observer");
      weatherData.removeObserver(observer);
      setRegistered(false);
    }
  };

  return (
    <fieldset>
      <legend>Smart Watch</legend>
      <button onClick={onClick}>
        {!registered ? "Subscribe" : "Unsubscribe"}
      </button>
      {registered && (
        <>
          <p>{`Temperature: ${temperature}F`}</p>
          <p>{`Humidity: ${humidity}%`}</p>
        </>
      )}
    </fieldset>
  );
}
