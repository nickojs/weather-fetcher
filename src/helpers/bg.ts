/* 
    These images would be fetched from a backend/cdn somewhere, I'm importing them imperatively 
    This is not how I would work with images in a regular scenario
*/

import moment from 'moment';
import clearSkyDay from '../assets/background/clear-sky/day.jpg';
import clearSkyNight from '../assets/background/clear-sky/night.jpg';
import cloudyDay from '../assets/background/clouds/day.jpg';
import cloudyNight from '../assets/background/clouds/night.jpg';
import mist from '../assets/background/mist/default.jpg';
import rainyDay from '../assets/background/rain/day.jpg';
import rainyNight from '../assets/background/rain/night.jpg';
import snow from '../assets/background/snow/default.jpg';
import thunderstorm from '../assets/background/thunderstorm/default.jpg'; 

const currentHour = Number(moment().format("HH"));
const isItDay = currentHour > 6 && currentHour < 18;

export const defineBg = (icon: string, isDay: boolean = isItDay) => {
  switch (icon) {
  case '01d':
  case '01n':
    return isDay ? clearSkyDay : clearSkyNight;
      
  case '02d':
  case '02n':
  case '03d':
  case '03n':
  case '04d':
  case '04n':
    return isDay ? cloudyDay : cloudyNight;
      
  case '09d':
  case '09n':
  case '10d':
  case '10n':
    return isDay ? rainyDay : rainyNight;
      
  case '11d':
  case '11n':
    return thunderstorm;
      
  case '13d':
  case '13n':
    return snow;

  case '50d':
  case '50n':
    return mist;
    
  default:
    throw new Error('[defineBg]: unknown icon type received');
  }
}; 
