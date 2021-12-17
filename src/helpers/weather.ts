import { Display, WeatherData, WeatherProps } from "../components/weatherCard/WeatherCard";

interface WeatherAPIResponse { 
  weather: Record<string, unknown>[];
  main: Record<string, unknown>;
  wind: Record<string, unknown>;
}

export const weatherDataParser = (weatherData: Record<string, unknown>): WeatherProps => {
  const { weather, main, wind } = weatherData as unknown as WeatherAPIResponse;
  const weatherWithin = weather[0];

  const data = {
    temp: main.temp,
    tempFeel: main.feels_like,
    pressure: main.pressure,
    humidity: main.humidity,
    speed: wind.speed,
    direction: wind.deg
  } as WeatherData;

  const display = { 
    main: weatherWithin.main,
    description: weatherWithin.description,
    icon: weatherWithin.icon,
    city: ''
  } as Display;

  return {
    display,
    data
  };
};

export const injectCityName = (name: string, weatherObj: WeatherProps): WeatherProps => {
  return {
    ...weatherObj,
    display: { 
      ...weatherObj.display,
      city: name
    }
  };
};
