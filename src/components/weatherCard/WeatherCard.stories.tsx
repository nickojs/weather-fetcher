import { Story, Meta } from '@storybook/react';
import WeatherCard from './WeatherCard';

export default {
  component: WeatherCard,
  title: 'Containers/WeatherCard'
} as Meta;

const WeatherCardStory: Story = (args) => <WeatherCard {...args} />;

export const WeatherInit = WeatherCardStory.bind({});
