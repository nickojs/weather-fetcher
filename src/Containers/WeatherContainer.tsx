import { useState, useEffect, useCallback } from "react";
import useRequest from "../hooks/useRequest";
import { WeatherCard } from "../components/";
import usePosition from '../contexts/PositionContext';
import { getWeather, getCityName } from '../services/endpoints';
import { injectExtraData, weatherDataParser } from '../helpers/weather';
import { ReverseGeoLocationResponse, WeatherData, WeatherProps } from "../interfaces";


export default (): JSX.Element => { 
  const [params, setParams] = useState({});
  const [cityParams, setCityParams] = useState({});
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<WeatherProps>();
  const { lat, lon, error: browserGeoError } = usePosition();

  // should probably use react-query or some other lib that does caching to decrease bandwidth usage
  const { data, error, loading } = useRequest(params);
  const { data: cityData } = useRequest(cityParams);
  
  const setParamsHandler = useCallback(() => {
    setParams(getWeather(lat, lon));
  }, [lat, lon]);

  useEffect(() => { 
    if (lat !== 0 || lon !== 0) { 
      setParamsHandler();
      setCityParams(getCityName(lat, lon));
    }
  }, [lat, lon, setParamsHandler]);

  useEffect(() => {
    if (data) setWeather(weatherDataParser(data));
  }, [data]);

  useEffect(() => {
    if (cityData) {
      const data = cityData[0] as ReverseGeoLocationResponse;
      setCity(data.name);
    }
  }, [cityData]);

  useEffect(() => {
    if (city && weather) {
      if (!weather.display.city) setWeather(w => w && injectExtraData(city, w));
    }
  }, [city, weather]);

  console.log(weather);

  return weather ? (
    <WeatherCard 
      data={weather.data}
      display={weather.display}
      loading={loading}
      reload={setParamsHandler}
    />
  ) : <p>oh no</p>;
};
