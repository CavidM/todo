import { IconButton, TextField } from '@material-ui/core';
import { Send } from '@material-ui/icons';

export interface NewMessageFormProps {
  value: string;
  handleChange: () => void;
}

export const NewMessageForm: React.FC<NewMessageFormProps> = ({
  value,
  handleChange
}) => {
  return (
    <>
      <TextField
        id="outlined-multiline-flexible"
        label="Multiline"
        multiline
        rowsMax={4}
        value={value}
        onChange={handleChange}
        variant="outlined"
      />
      <IconButton>
        <Send />
      </IconButton>
    </>
  );
};
