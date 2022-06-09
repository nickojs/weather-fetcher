import moment from 'moment';
import { Container } from './styles';
import { WeatherCardProps } from '../../interfaces';
import { tempParser as tp } from '../../helpers/weather';
import { defineBg } from '../../helpers/bg';


export default (props: WeatherCardProps): JSX.Element => { 
  const { display, data, loading, reload } = props;
  const { city, state, description, icon } = display;
  const { humidity, pressure, speed, direction, tempMin, tempMax } = data;
  
  return (
    <Container bg={defineBg(icon)}>
      <div>
        <h1>{city}</h1>
        <p>{moment().format("dddd, MMMM Do, YYYY")}</p>
      </div>

      <p>{tp(data.temp)}&deg;</p>

      <div>
        <p>{description}</p>
        <div>
          <p>{tempMin}ºC / {tempMax}ºC</p>
        </div>
      </div>

      <div>
        // reload button
      </div>

      <div>
        // section with more weather info
      </div>
    </Container>
  );
};
