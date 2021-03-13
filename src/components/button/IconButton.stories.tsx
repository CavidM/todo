import SendIcon from '@material-ui/icons/Send';
import { Meta, Story } from '@storybook/react/types-6-0';
import IconButton, { SendMessageButtonProps } from './IconButton';

export default {
  title: 'Messenger/IconButton',
  component: IconButton,
  argTypes: {
    children: {
      control: null
    }
  }
} as Meta;

const Template: Story = (args: SendMessageButtonProps) => (
  <IconButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: <SendIcon />
};
