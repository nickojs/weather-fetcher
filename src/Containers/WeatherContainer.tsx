import { useState, useEffect } from "react";
import useRequest from "../hooks/useRequest";
import { getWeather } from '../services/endpoints';
import usePosition from '../contexts/PositionContext';
import WeatherCard, { Display, WeatherData, WeatherProps } from "../components/weatherCard/WeatherCard";
import ErrorCard, { ErrorType } from '../components/errorCard/ErrorCard';

interface APIResponse { 
  weather: Record<string, unknown>[];
  main: Record<string, unknown>;
  wind: Record<string, unknown>;
}

const weatherDataParser = (weatherData: Record<string, unknown>): WeatherProps => {
  const { weather, main, wind } = weatherData as unknown as APIResponse;
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
    city: 'Santos' // WIP!!!
  } as Display;

  return {
    display,
    data
  };
};

export default (): JSX.Element => { 
  const [params, setParams] = useState({});
  const [weather, setWeather] = useState<WeatherProps | null>(null);
  const [waitUser, setWaitUser] = useState(true);
  const { lat, lon, error: browserGeoError } = usePosition();

  const { data, error, loading } = useRequest(params);

  useEffect(() => { 
    if (lat !== 0 || lon !== 0) { 
      setParams(getWeather(lat, lon));
      setWaitUser(false);
    }
  }, [lat, lon]);

  useEffect(() => {
    if (data) setWeather(weatherDataParser(data));
  }, [data]);

  useEffect(() => {
    if (browserGeoError || error) setWaitUser(false);
  }, [browserGeoError, error]);

  return (
    <>
      {waitUser && <p>Waiting on user input</p>}
      {browserGeoError && <ErrorCard error={ErrorType.REFUSED} />}
      {loading && <p>Fetching data...</p>}
      {error && <ErrorCard error={ErrorType.NETWORK} extraInfo={error} />}
      {weather && <WeatherCard {...weather} />} 
    </>
  );
};
