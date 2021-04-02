import { Meta } from '@storybook/react/types-6-0';
import { MessageItem } from '../message-item/MessageItem';
import {
  MyMessage,
  YourMessage
} from '../message-item/MessageItem.stories';
import MessageList from './MessageList';

export default {
  title: 'Messenger/MessageList',
  component: MessageList,
  subcomponents: { MessageItem }
} as Meta;

const ListTemplate = ({ items, ...args }) => (
  <MessageList>
    {items.map((item) => (
      <MessageItem {...item} />
    ))}
  </MessageList>
);

export const Empty = ListTemplate.bind({});
Empty.args = { items: [] };

export const OneItem = ListTemplate.bind({});
OneItem.args = { items: [YourMessage.args] };

export const MoreItem = ListTemplate.bind({});
MoreItem.args = {
  items: [YourMessage.args, MyMessage.args, YourMessage.args]
};
