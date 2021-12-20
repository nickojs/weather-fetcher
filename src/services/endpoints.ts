const appid = process.env.REACT_APP_API_KEY;

const baseParams = {
  units: 'metric',
  appid
};

export const getWeather = (lat: number, lon: number) => ({
  params: { 
    lat,
    lon,
    ...baseParams
  }
});

export const getCityName = (lat: number, lon: number) => ({
  baseURL: 'https://api.openweathermap.org/geo/1.0/reverse',
  params: {
    lat, 
    lon,
    ...baseParams
  }
});
