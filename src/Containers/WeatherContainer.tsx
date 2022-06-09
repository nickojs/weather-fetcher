import { useState, useEffect, useCallback } from "react";
import useRequest from "../hooks/useRequest";
import { WeatherCard } from "../components/";
import usePosition from '../contexts/PositionContext';
import { getWeather, getCityName } from '../services/endpoints';
import { injectExtraData, weatherDataParser } from '../helpers/weather';
import { ErrorType, LoadingType, ReverseGeoLocationResponse, WeatherProps } from "../interfaces";


export default (): JSX.Element => { 
  const [params, setParams] = useState({});
  const [cityParams, setCityParams] = useState({});
  const [weather, setWeather] = useState<WeatherProps>();
  const [location, setLocation] = useState({ city: '', state: '' });
  const [waitUser, setWaitUser] = useState(true);
  const { lat, lon, error: browserGeoError } = usePosition();

  const { data, error, loading } = useRequest(params);
  const { data: cityData } = useRequest(cityParams);
  
  const setParamsHandler = useCallback(() => {
    setParams(getWeather(lat, lon));
  }, [lat, lon]);

  useEffect(() => { 
    if (lat !== 0 || lon !== 0) { 
      setParamsHandler();
      setCityParams(getCityName(lat, lon));
      setWaitUser(false);
    }
  }, [lat, lon, setParamsHandler]);

  useEffect(() => {
    if (data) setWeather(weatherDataParser(data));
  }, [data]);

  useEffect(() => {
    if (cityData) {
      const data = cityData[0] as unknown as ReverseGeoLocationResponse;
      const { name, state } = data;
      setLocation({ city: name, state });
    }
  }, [cityData]);

  useEffect(() => {
    if ((location.state || location.city) && weather) {
      const { city, state } = location;
      if (!weather.display.city) setWeather(w => w && injectExtraData(city, state, w));
    }
  }, [location, weather]);

  useEffect(() => {
    if (browserGeoError || error) setWaitUser(false);
  }, [browserGeoError, error]);

  return (
    <div>Placeholder</div>
  );
};
