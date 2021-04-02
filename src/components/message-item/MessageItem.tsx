import {
  Avatar,
  Paper,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

//@TODO
export enum MessageSender {
  ME = 'ME',
  YOU = 'YOU'
}

export interface MessageItemProps {
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
  sender: MessageSender;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: 400,
    padding: theme.spacing(2)
  },
  otherMessage: {
    flexDirection: 'row-reverse'
  }
}));

export const MessageItem: React.FC<MessageItemProps> = ({
  userImage = 'https://material-ui.com/static/images/avatar/1.jpg',
  message = '',
  sender = undefined
}) => {
  const classes = useStyles();

  const senderClass =
    sender === MessageSender.YOU ? classes.otherMessage : '';

  return (
    <>
      <Paper className={`${classes.paper}`} elevation={24}>
        <Grid
          container
          wrap="nowrap"
          spacing={2}
          className={senderClass}
        >
          <Grid item>
            <Avatar src={userImage} />
          </Grid>
          <Grid item xs>
            <Typography>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};
