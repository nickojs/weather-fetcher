import React, { useContext, useEffect, useState } from 'react';

export interface LatLon { 
  lat: number;
  lon: number;
}

interface PositionContextProps extends LatLon {
  error: string;
};

const PositionContext = React.createContext<PositionContextProps>(
  {} as PositionContextProps
);

export const PositionProvider: React.FC = ({ children }) => {
  const [latLon, setLatLon] = useState<LatLon>({ lat: 0, lon: 0 });
  const [error, setError] = useState('');

  const positionParser = (position: GeolocationPosition) => {
    const data = {
      lat: position.coords.latitude,
      lon: position.coords.longitude
    };
    setLatLon(data);
  };

  const errorHandler = (error: GeolocationPositionError) => {
    setError(error.message);
  };

  useEffect(() => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(positionParser, errorHandler);
    } 
  }, []);
  
  return (
    <PositionContext.Provider
      value={{
        ...latLon,
        error
      }}
    >
      {children}
    </PositionContext.Provider>
  );
};

export default (): PositionContextProps => {
  const context = useContext(PositionContext);
  return context;
};
