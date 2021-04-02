import { Meta, Story } from '@storybook/react/types-6-0';
import {
  MessageItem,
  MessageItemProps,
  MessageSender
} from './MessageItem';

export default {
  title: 'Messenger/MessageItem',
  component: MessageItem
} as Meta;

const Template: Story<MessageItemProps> = (args) => (
  <MessageItem {...args} />
);

export const YourMessage = Template.bind({});
YourMessage.args = {
  message: 'I will send',
  sender: MessageSender.YOU
};

export const MyMessage = Template.bind({});
MyMessage.args = {
  message: 'I will send',
  sender: MessageSender.ME
};
