import { Story, Meta } from '@storybook/react';
import WeatherCard from '../components/weatherCard/WeatherCard';
import { WeatherContainer } from '../Containers/styles';
import mock from '../components/weatherCard/mocks/';
import { WeatherCardProps } from '../interfaces';

export default {
  component: WeatherCard,
  title: 'Components/WeatherCard'
} as Meta;

const WeatherCardStory: Story<WeatherCardProps> = (args) => (
  <WeatherContainer>
    <WeatherCard {...args} /> 
  </WeatherContainer>
);

export const WeatherInit = WeatherCardStory.bind({});

WeatherInit.args = {
  ...mock
};
