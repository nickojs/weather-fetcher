import { Story, Meta } from '@storybook/react';
import Loading, { LoadingType, LoadingProps } from '../components/UI/loading/Loading';

export default {
  component: Loading,
  title: 'UI/Loading'
} as Meta;

const LoadingStory: Story<LoadingProps> = (args) => <Loading {...args} />;

export const WaitingOnGeoLocation = LoadingStory.bind({});
WaitingOnGeoLocation.args = {
  type: LoadingType.USERINPUT
};

export const WaitingOnWeatherData = LoadingStory.bind({});
WaitingOnWeatherData.args = {
  type: LoadingType.NETWORK
};
