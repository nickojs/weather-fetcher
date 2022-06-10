import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCaretDown, 
  faCaretUp,
  faRotate
} from '@fortawesome/free-solid-svg-icons';
import { 
  Container, 
  TitleWrapper, 
  CityTitle, 
  Temp, 
  TempDetailsWrapper, 
  MinMaxWrapper, 
  MinWrapper,
  MaxWrapper,
  Menu,
  DescriptionWrapper
} from './styles';
import { WeatherCardProps } from '../../interfaces';
import { tempParser as tp } from '../../helpers/weather';
import { defineBg } from '../../helpers/bg';
import Drawer from '../Drawer/Drawer';


export default (props: WeatherCardProps): JSX.Element => { 
  const { display, data, loading, reload } = props;
  const { city, description, icon } = display;
  const { tempMin, tempMax } = data;

  return (
    <Container bg={defineBg(icon)}>
      <Menu onClick={reload} disabled={loading}>
        <FontAwesomeIcon icon={faRotate} />
      </Menu>
      <TitleWrapper>
        <CityTitle>{city}</CityTitle>
        <p>{moment().format("dddd, MMMM Do, YYYY")}</p>
      </TitleWrapper>

      <Temp>{tp(data.temp)}&deg;C</Temp>
      <DescriptionWrapper>
        <p>{description}</p>
      </DescriptionWrapper>

      <TempDetailsWrapper>
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

      <Drawer {...data} />
    </Container>
  );
};
