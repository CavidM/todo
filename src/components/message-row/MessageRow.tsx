import { Avatar } from '@material-ui/core';

export interface MessageRowProps {
  /**
   * Image of user who send message
   */
  userImage: string;
  /**
   * Message content
   */
  message: string;
  /**
   * Hold sender 1 means other, 2 means my message
   */
  sender: '1' | '2';
}

export const MessageRow: React.FC<MessageRowProps> = ({
  userImage = 'https://material-ui.com/static/images/avatar/1.jpg',
  message = '',
  sender = undefined
}) => {
  return (
    <>
      <Avatar src={userImage} />
      <p>{message}</p>
    </>
  );
};
