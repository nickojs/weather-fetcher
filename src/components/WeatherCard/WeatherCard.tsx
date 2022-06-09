import moment from 'moment';
import { 
  Container, 
  TitleWrapper, 
  CityTitle, 
  Temp, 
  TempDetailsWrapper, 
  MinMaxWrapper, 
  MinWrapper,
  MaxWrapper
} from './styles';
import { WeatherCardProps } from '../../interfaces';
import { tempParser as tp } from '../../helpers/weather';
import { defineBg } from '../../helpers/bg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';


export default (props: WeatherCardProps): JSX.Element => { 
  const { display, data, loading, reload } = props;
  const { city, state, description, icon } = display;
  const { humidity, pressure, speed, direction, tempMin, tempMax } = data;
  
  return (
    <Container bg={defineBg(icon)}>
      <TitleWrapper>
        <CityTitle>{city}</CityTitle>
        <p>{moment().format("dddd, MMMM Do, YYYY")}</p>
      </TitleWrapper>

      <Temp>{tp(data.temp)}&deg;C</Temp>

      <TempDetailsWrapper>
        <p>{description}</p>
        <MinMaxWrapper>
          <MinWrapper>
            <FontAwesomeIcon icon={faCaretDown} />
            <p>{tempMin}ºC</p>
          </MinWrapper>
          <MaxWrapper>
            <FontAwesomeIcon icon={faCaretUp} />
            <p>{tempMax}ºC</p>
          </MaxWrapper>
        </MinMaxWrapper>
      </TempDetailsWrapper>

      <div>
        // section with more weather info
      </div>
    </Container>
  );
};
