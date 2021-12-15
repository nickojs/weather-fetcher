import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './WeatherCard.stories';

const { WeatherInit } = composeStories(stories);

test('renders blank weatherCard', () => { 
  render(<WeatherInit />);
  const component = screen.getByTestId('weather-card-root');

  expect(component).not.toBeNull();
});
