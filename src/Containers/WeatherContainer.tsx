import { useState, useEffect, useCallback } from "react";
import useRequest from "../hooks/useRequest";
import { getWeather, getCityName } from '../services/endpoints';
import usePosition from '../contexts/PositionContext';
import WeatherCard, { Display, WeatherData, WeatherProps } from "../components/weatherCard/WeatherCard";
import ErrorCard, { ErrorType } from '../components/UI/errorCard/ErrorCard';
import Loading, { LoadingType } from '../components/UI/loading/Loading';
import { WeatherContainer } from './styles';

interface WeatherAPIResponse { 
  weather: Record<string, unknown>[];
  main: Record<string, unknown>;
  wind: Record<string, unknown>;
}

interface ReverseGeoLocationResponse { 
  name: string;
}

const weatherDataParser = (weatherData: Record<string, unknown>): WeatherProps => {
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

const injectCityName = (name: string, weatherObj: WeatherProps): WeatherProps => {
  return {
    ...weatherObj,
    display: { 
      ...weatherObj.display,
      city: name
    }
  };
};

export default (): JSX.Element => { 
  const [params, setParams] = useState({});
  const [cityParams, setCityParams] = useState({});
  const [weather, setWeather] = useState<WeatherProps>();
  const [city, setCity] = useState<string>('');
  const [waitUser, setWaitUser] = useState(true);
  const { lat, lon, error: browserGeoError } = usePosition();

  const { data, error, loading } = useRequest(params);
  const { data: cityData } = useRequest(cityParams);

  useEffect(() => { 
    if (lat !== 0 || lon !== 0) { 
      setParams(getWeather(lat, lon));
      setCityParams(getCityName(lat, lon));
      setWaitUser(false);
    }
  }, [lat, lon]);

  useEffect(() => {
    if (data) setWeather(weatherDataParser(data));
  }, [data]);

  useEffect(() => {
    if (cityData) {
      const data = cityData[0] as unknown as ReverseGeoLocationResponse;
      setCity(data.name);
    }
  }, [cityData]);

  useEffect(() => {
    if (city) setWeather(w => w && injectCityName(city, w));
  }, [city]);

  useEffect(() => {
    if (browserGeoError || error) setWaitUser(false);
  }, [browserGeoError, error]);

  return (
    <WeatherContainer>
      {waitUser && <Loading type={LoadingType.USERINPUT} />}
      {browserGeoError && <ErrorCard type={ErrorType.REFUSED} />}
      {loading && <Loading type={LoadingType.NETWORK} />}
      {error && <ErrorCard type={ErrorType.NETWORK} extraInfo={error} />}
      {weather && <WeatherCard {...weather} />} 
    </WeatherContainer>
  );
};
