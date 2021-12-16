import { WeatherContainer, WeatherHeader, WeatherDetails } from './styles';
import IconText, { IconType } from './IconText';

interface Display { 
  main: string;
  description: string;
  icon: string;
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
  const { humidity, pressure, speed, direction } = data;
  return (
    <WeatherContainer data-testid="weather-card-root">
      <WeatherHeader>
        <h1>Santos, SP</h1>
        <p>{display.description}</p>
        <img src={`http://openweathermap.org/img/w/${display.icon}.png`} alt="Weather Icon"/>
      </WeatherHeader>
      <p>{data.temp}ºC</p>
      <WeatherDetails>
        {IconText({ type: IconType.HUMIDITY, humidity })}
        {IconText({ type: IconType.PRESSURE, pressure })}
        {IconText({ type: IconType.WIND, speed, direction })}
      </WeatherDetails>
    </WeatherContainer>
  );
};
