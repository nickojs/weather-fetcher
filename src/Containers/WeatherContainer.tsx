import { useState, useEffect, useCallback } from "react";
import useRequest from "../hooks/useRequest";
import WeatherCard from "../components/weatherCard/WeatherCard";
import ErrorCard from '../components/UI/errorCard/ErrorCard';
import Loading from '../components/UI/loading/Loading';
import usePosition from '../contexts/PositionContext';
import { WeatherContainer } from './styles';
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

  const output = [
    {
      validation: waitUser,
      component: <Loading type={LoadingType.USERINPUT} />
    },
    {
      validation: browserGeoError,
      component: <ErrorCard type={ErrorType.REFUSED} />
    },
    {
      validation: loading,
      component: <Loading type={LoadingType.NETWORK} />
    },
    {
      validation: error,
      component: error && <ErrorCard type={ErrorType.NETWORK} extraInfo={error} />
    },
    {
      validation: weather,
      component: weather && <WeatherCard {...weather} loading={loading} reload={setParamsHandler} />
    }
  ];

  return (
    <WeatherContainer>
      {output.map((c) => c.validation && c.component)}
    </WeatherContainer>
  );
};
