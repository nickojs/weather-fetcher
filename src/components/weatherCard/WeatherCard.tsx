import { WeatherHeader, 
  WeatherDetails, 
  WeatherTitle, 
  WeatherTitleContainer, 
  WeatherInnerContainer
} from './styles';
import IconText, { IconType } from './IconText';
import Reload from '../UI/reload/Reload';
import { WeatherCardProps } from '../../interfaces';
import { tempParser as tp } from '../../helpers/weather';

export default (props: WeatherCardProps): JSX.Element => { 
  const { display, data, loading, reload } = props;
  const { city, state, description, icon } = display;
  const { humidity, pressure, speed, direction, tempMin, tempMax } = data;
  
  return (
    <WeatherInnerContainer>
      {data && <Reload loading={loading} onClick={reload} />}
      <WeatherHeader>
        <h1>{city}</h1>
        <h5>{state}</h5>
        <p>{description}</p>
        <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="Weather Icon"/>
      </WeatherHeader>
      <WeatherTitleContainer>
        {IconText({ type: IconType.TEMPMIN, temp: tp(tempMin) })}
        <WeatherTitle>{tp(data.temp)}&deg;</WeatherTitle>
        {IconText({ type: IconType.TEMPMAX, temp: tp(tempMax) })}
      </WeatherTitleContainer>
      <WeatherDetails>
        {IconText({ type: IconType.HUMIDITY, humidity })}
        {IconText({ type: IconType.PRESSURE, pressure })}
        {IconText({ type: IconType.WIND, speed, direction })}
      </WeatherDetails>
    </WeatherInnerContainer>
  );
};
