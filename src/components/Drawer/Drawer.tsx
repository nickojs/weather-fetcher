

import { useState } from 'react';
import { 
  faDroplet, 
  faGauge, 
  faLocationArrow, 
  faWind 
} from '@fortawesome/free-solid-svg-icons';
import { 
  Drawer,
  DrawerGrid,
  LinkButton
} from './styles';
import DrawerItem from '../DrawerItem/DrawerItem';
import { WeatherData } from '../../interfaces';


export default (data: WeatherData): JSX.Element => { 
  const { humidity, pressure, speed, direction } = data;
  const [drawer, toggleDrawer] = useState(false);
  
  return (
    <>
      <LinkButton
        type="button" 
        onClick={() => toggleDrawer(!drawer)}
        show={drawer}
      >
        More info
      </LinkButton>

      <Drawer show={drawer}>
        <DrawerGrid>
          <DrawerItem icon={faDroplet} info={humidity} />
          <DrawerItem icon={faGauge} info={pressure} />
          <DrawerItem icon={faWind} info={speed} />
          <DrawerItem icon={faLocationArrow} info={direction} />
        </DrawerGrid>
        <LinkButton onClick={() => toggleDrawer(!drawer)}>Dismiss</LinkButton>
      </Drawer>
    </>
  );
};
