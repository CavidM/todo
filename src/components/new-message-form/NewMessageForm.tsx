import { TextField } from '@material-ui/core';

interface NewMessageFormProps {
  value: string;
  handleChange: () => void;
}

export default function NewMessageForm({
  value,
  handleChange
}: NewMessageFormProps) {
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
    </>
  );
}
