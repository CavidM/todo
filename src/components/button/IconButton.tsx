import {
  IconButton as MuiIconButton,
  PropTypes,
  useTheme
} from '@material-ui/core';

export interface SendMessageButtonProps {
  size?: 'small' | 'medium';
  color?: PropTypes.Color;
  disabled?: boolean;
  children: JSX.Element;
}

const IconButton: React.FC<SendMessageButtonProps> = ({
  size = 'small',
  color = 'primary',
  disabled = false,
  children = null
}) => {
  return (
    <MuiIconButton size={size} color={color} disabled={disabled}>
      {children}
    </MuiIconButton>
  );
};

export default IconButton;
