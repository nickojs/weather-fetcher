import { Story, Meta } from '@storybook/react';
import WeatherCard, { WeatherProps } from '../components/weatherCard/WeatherCard';
import mock from '../components/weatherCard/mocks/';

export default {
  component: WeatherCard,
  title: 'Components/WeatherCard'
} as Meta;

const WeatherCardStory: Story<WeatherProps> = (args) => <WeatherCard {...args} />;

export const WeatherInit = WeatherCardStory.bind({});

WeatherInit.args = {
  ...mock
};
