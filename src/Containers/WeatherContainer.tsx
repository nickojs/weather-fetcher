import { useState, useEffect } from "react";
import useRequest from "../hooks/useRequest";
import { getWeather } from '../services/endpoints';
import usePosition from '../contexts/PositionContext';

export default (): JSX.Element => { 
  const [params, setParams] = useState({});
  const [weather, setWeather] = useState<Record<string, unknown>>();
  const { lat, lon } = usePosition();

  const { data, error, loading } = useRequest(params);

  useEffect(() => { 
    if (lat !== 0 || lon !== 0) { 
      setParams(getWeather(lat, lon));
    }
  }, [lat, lon]);

  return (
    <div>Hi</div>
  );
};
