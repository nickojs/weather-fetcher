import { WeatherContainer, WeatherHeader, WeatherDetails, WeatherTitle } from './styles';
import IconText, { IconType } from './IconText';

interface Display { 
  main: string;
  description: string;
  icon: string;
  city: string;
}

interface WeatherData { 
  temp: number;
  tempFeel: number;
  pressure: number;
  humidity: number;
  speed: number;
  direction: number;
}

export interface WeatherProps {
  display: Display
  data: WeatherData
}

export default (props: WeatherProps): JSX.Element => { 
  const { display, data } = props;
  const { city, description, icon } = display;
  const { humidity, pressure, speed, direction } = data;
  
  return (
    <WeatherContainer data-testid="weather-card-root">
      <WeatherHeader>
        <h1>{city}</h1>
        <p>{description}</p>
        <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="Weather Icon"/>
      </WeatherHeader>
      <WeatherTitle>{data.temp}&deg;</WeatherTitle>
      <WeatherDetails>
        {IconText({ type: IconType.HUMIDITY, humidity })}
        {IconText({ type: IconType.PRESSURE, pressure })}
        {IconText({ type: IconType.WIND, speed, direction })}
      </WeatherDetails>
    </WeatherContainer>
  );
};