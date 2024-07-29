import { Subject, Observer } from "./types";

class WeatherData implements Subject {
  private observers: Observer[] = [];
  private temperature: number = 0;
  private humidity: number = 0;

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.temperature, this.humidity);
    }
  }

  setMeasurements(temperature: number, humidity: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.measurementsChanged();
  }

  measurementsChanged(): void {
    this.notifyObservers();
  }
}

export default WeatherData;
