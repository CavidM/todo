import { Meta, Story } from '@storybook/react/types-6-0';
import {
  NewMessageForm,
  NewMessageFormProps
} from './NewMessageForm';

export default {
  title: 'Messenger/NewMessageForm',
  component: NewMessageForm
} as Meta;

const Template: Story<NewMessageFormProps> = (args) => (
  <NewMessageForm {...args} />
);

export const Main = Template.bind({});
Main.args = {
  value: 'input message'
};
