import { Story, Meta } from '@storybook/react';
import Loading from '../components/UI/loading/Loading';
import { LoadingProps, LoadingType } from '../interfaces';

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
