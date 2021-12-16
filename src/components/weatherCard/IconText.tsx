import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faWind, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { IconTextWrapper } from './styles';

export enum IconType {
  HUMIDITY,
  WIND,
  PRESSURE,
}

type IconTextActions = 
  | { type: IconType.HUMIDITY, humidity: number; }
  | { type: IconType.WIND, speed: number; direction: number; }
  | { type: IconType.PRESSURE, pressure: number; }


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
        <p>{actions.speed} km/h</p>
      </IconTextWrapper>
    );
  
  case IconType.PRESSURE:
    return (
      <IconTextWrapper>
        <FontAwesomeIcon icon={faTachometerAlt} />
        <p>{actions.pressure} hPa</p>
      </IconTextWrapper>
    );
  
  default:
    throw new Error('[typeParser] unknown type value received');
  }
};
