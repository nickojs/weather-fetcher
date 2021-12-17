import { Story, Meta } from '@storybook/react';
import ErrorCard from '../components/UI/errorCard/ErrorCard';
import { ErrorCardProps, ErrorType } from '../interfaces';

export default {
  component: ErrorCard,
  title: 'UI/Errors'
} as Meta;

const ErrorCardStory: Story<ErrorCardProps> = (args) => <ErrorCard {...args} />;

export const RefusedGeolocation = ErrorCardStory.bind({});
RefusedGeolocation.args = {
  type: ErrorType.REFUSED
};

export const FailedToFetchData = ErrorCardStory.bind({});
FailedToFetchData.args = {
  type: ErrorType.NETWORK,
  extraInfo: 'Extra info for the error'
};
