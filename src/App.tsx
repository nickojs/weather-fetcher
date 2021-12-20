import WeatherContainer from './Containers/WeatherContainer';
import { PositionProvider } from "./contexts/PositionContext";

export default (): JSX.Element => { 
  return (
    <PositionProvider>
      <WeatherContainer />
    </PositionProvider>
  );
};
