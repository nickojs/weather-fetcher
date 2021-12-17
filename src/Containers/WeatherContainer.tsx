import { useState, useEffect } from "react";
import useRequest from "../hooks/useRequest";
import WeatherCard, { WeatherProps } from "../components/weatherCard/WeatherCard";
import ErrorCard, { ErrorType } from '../components/UI/errorCard/ErrorCard';
import Loading, { LoadingType } from '../components/UI/loading/Loading';
import usePosition from '../contexts/PositionContext';
import { WeatherContainer } from './styles';
import { getWeather, getCityName } from '../services/endpoints';
import { injectCityName, weatherDataParser } from '../helpers/weather';

interface ReverseGeoLocationResponse { 
  name: string;
}

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
    if (city && weather) {
      if (!weather.display.city) setWeather(w => w && injectCityName(city, w));
    }
  }, [city, weather]);

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
