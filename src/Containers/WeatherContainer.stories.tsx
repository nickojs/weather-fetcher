import { Story, Meta } from '@storybook/react';
import WeatherContainer from './WeatherContainer';
import { PositionProvider } from '../contexts/PositionContext';

export default {
  component: WeatherContainer,
  title: 'Context/WeatherContainer',
  decorators: []
} as Meta;

const WeatherContainerStory: Story = (args) => (
  <PositionProvider>
    <WeatherContainer {...args} />;
  </PositionProvider>
);

export const WeatherContainerInit = WeatherContainerStory.bind({});
