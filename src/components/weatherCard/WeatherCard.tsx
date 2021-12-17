import { WeatherHeader, WeatherDetails, WeatherTitle, WeatherTitleContainer } from './styles';
import IconText, { IconType } from './IconText';

export interface Display { 
  main: string;
  description: string;
  icon: string;
  city: string;
}

export interface WeatherData { 
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
    <div>
      <WeatherHeader>
        <h1>{city}</h1>
        <p>{description}</p>
        <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="Weather Icon"/>
      </WeatherHeader>
      <WeatherTitleContainer>
        {IconText({ type: IconType.TEMPMIN, temp: 20 })}
        <WeatherTitle>{Math.round(data.temp)}&deg;</WeatherTitle>
        {IconText({ type: IconType.TEMPMAX, temp: 40 })}
      </WeatherTitleContainer>
      <WeatherDetails>
        {IconText({ type: IconType.HUMIDITY, humidity })}
        {IconText({ type: IconType.PRESSURE, pressure })}
        {IconText({ type: IconType.WIND, speed, direction })}
      </WeatherDetails>
    </div>
  );
};
