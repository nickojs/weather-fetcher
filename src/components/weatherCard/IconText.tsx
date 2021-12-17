import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faWind, faTachometerAlt, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { IconTextWrapper } from './styles';

export enum IconType {
  HUMIDITY,
  WIND,
  PRESSURE,
  TEMPMAX,
  TEMPMIN
}

type IconTextActions = 
  | { type: IconType.HUMIDITY, humidity: number; }
  | { type: IconType.WIND, speed: number; direction: number; }
  | { type: IconType.PRESSURE, pressure: number; }
  | { type: IconType.TEMPMAX, temp: number; }
  | { type: IconType.TEMPMIN, temp: number; }


export default (actions: IconTextActions): JSX.Element => {
  switch (actions.type) {
  case IconType.HUMIDITY:
    return (
      <IconTextWrapper>
        <FontAwesomeIcon icon={faTint} />
        <p>{actions.humidity}%</p>
      </IconTextWrapper>
    );
  
  case IconType.WIND:
    return (
      <IconTextWrapper>
        <FontAwesomeIcon icon={faWind} style={{ transform: `rotate(${actions.direction}deg)` }}/>
        <p>{actions.speed} m/s</p>
      </IconTextWrapper>
    );
  
  case IconType.PRESSURE:
    return (
      <IconTextWrapper>
        <FontAwesomeIcon icon={faTachometerAlt} />
        <p>{actions.pressure} hPa</p>
      </IconTextWrapper>
    );

  case IconType.TEMPMAX:
    return (
      <IconTextWrapper>
        <FontAwesomeIcon icon={faArrowUp} color='red'/>
        <p>{actions.temp}&deg;</p>
      </IconTextWrapper>
    );

  case IconType.TEMPMIN:
    return (
      <IconTextWrapper>
        <FontAwesomeIcon icon={faArrowDown} color='blue'/>
        <p>{actions.temp}&deg;</p>
      </IconTextWrapper>
    );
  
  default:
    throw new Error('[typeParser] unknown type value received');
  }
};
