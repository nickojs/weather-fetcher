import { useState, useEffect } from "react";
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
    <WeatherContainer>
      {waitUser && <Loading type={LoadingType.USERINPUT} />}
      {browserGeoError && <ErrorCard type={ErrorType.REFUSED} />}
      {loading && <Loading type={LoadingType.NETWORK} />}
      {error && <ErrorCard type={ErrorType.NETWORK} extraInfo={error} />}
      {weather && <WeatherCard {...weather} />} 
    </WeatherContainer>
  );
};
