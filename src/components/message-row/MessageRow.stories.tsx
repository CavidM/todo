import { Meta, Story } from '@storybook/react/types-6-0';
import { MessageRow, MessageRowProps } from './MessageRow';

export default {
  title: 'Messenger/MessageRow',
  component: MessageRow
} as Meta;

const Template: Story<MessageRowProps> = (args) => (
  <MessageRow {...args} />
);

export const OtherSender = Template.bind({});
OtherSender.args = {
  sender: '1'
};
