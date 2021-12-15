import { Story, Meta } from '@storybook/react';
import WeatherCard, { WeatherProps } from './WeatherCard';
import mock from './mocks';

export default {
  component: WeatherCard,
  title: 'Containers/WeatherCard'
} as Meta;

const WeatherCardStory: Story<WeatherProps> = (args) => <WeatherCard {...args} />;

export const WeatherInit = WeatherCardStory.bind({});

WeatherInit.args = {
  ...mock
};
