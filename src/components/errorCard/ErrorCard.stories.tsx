import { Story, Meta } from '@storybook/react';
import ErrorCard, { ErrorCardProps, ErrorType } from './ErrorCard';

export default {
  component: ErrorCard,
  title: 'UI/Errors'
} as Meta;

const ErrorCardStory: Story<ErrorCardProps> = (args) => <ErrorCard {...args} />;

export const RefusedGeolocation = ErrorCardStory.bind({});
RefusedGeolocation.args = {
  error: ErrorType.REFUSED
};

export const FailedToFetchData = ErrorCardStory.bind({});
FailedToFetchData.args = {
  error: ErrorType.NETWORK,
  extraInfo: 'Extra info for the error'
};
