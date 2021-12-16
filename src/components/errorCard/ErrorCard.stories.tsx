import { Story, Meta } from '@storybook/react';
import ErrorCard, { ErrorCardProps } from './ErrorCard';
import errorMocks from './mocks';

export default {
  component: ErrorCard,
  title: 'UI/Errors'
} as Meta;

const ErrorCardStory: Story<ErrorCardProps> = (args) => <ErrorCard {...args} />;

export const RefusedGeolocation = ErrorCardStory.bind({});
RefusedGeolocation.args = {
  error: errorMocks.refusedGeolocation
};

export const FailedToFetchData = ErrorCardStory.bind({});
FailedToFetchData.args = {
  error: errorMocks.networkError
};
