import { WeatherContainer, WeatherHeader, WeatherDetails } from './styles';

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
  return (
    <WeatherContainer data-testid="weather-card-root">
      <WeatherHeader>
        <div>
          {display.icon}
          {display.main}
        </div>
        <div>
          {data.temp}
          {data.tempFeel}
        </div>
      </WeatherHeader>

      <WeatherDetails>
        <div>
          {data.speed}
          {data.direction}
        </div>
        <div>
          {data.humidity}
          {data.pressure}
        </div>
      </WeatherDetails>
    </WeatherContainer>
  );
};
