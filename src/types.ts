export interface Observer {
  update(temperature: number, humidity: number): void;
}

export interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}
