import { Story, Meta } from '@storybook/react';
import { WeatherCard } from '../components/';
import mock from '../mocks';
import { WeatherCardProps } from '../interfaces';

export default {
  component: WeatherCard,
  title: 'Components/WeatherCard'
} as Meta;

const WeatherCardStory: Story<WeatherCardProps> = (args) => (
  <WeatherCard {...args} /> 
);

export const WeatherInit = WeatherCardStory.bind({});

WeatherInit.args = {
  ...mock
};
