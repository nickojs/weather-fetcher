import { Story, Meta } from '@storybook/react';
import Reload, { ReloadButtonBaseProps } from '../components/UI/reload/Reload';

export default {
  component: Reload,
  title: 'UI/Reload Button'
} as Meta;

const ReloadStory: Story<ReloadButtonBaseProps> = (args) => (
  <div style={{ position: 'relative', width: '5px', margin: '0 auto' }}>
    <Reload {...args} />
  </div>
);

export const ButtonDefault = ReloadStory.bind({});
ButtonDefault.args = {
  loading: false
};

export const ButtonLoading = ReloadStory.bind({});
ButtonLoading.args = {
  loading: true
};
