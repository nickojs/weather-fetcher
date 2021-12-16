const appid = process.env.REACT_API_KEY;

const baseParams = {
  units: 'metric',
  appid
};

export const getWeather = (lat: number, lon: number) => ({
  lat,
  lon,
  ...baseParams
});
