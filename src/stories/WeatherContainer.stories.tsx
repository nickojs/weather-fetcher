import { Story, Meta } from '@storybook/react';
import WeatherContainer from '../Containers/WeatherContainer';
import { PositionProvider } from '../contexts/PositionContext';

export default {
  component: WeatherContainer,
  title: 'Context/Weather',
  decorators: []
} as Meta;

const WeatherContainerStory: Story = (args) => (
  <PositionProvider>
    <WeatherContainer {...args} />
  </PositionProvider>
);

export const WeatherContainerInit = WeatherContainerStory.bind({});
