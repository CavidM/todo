import {
  IconButton as MuiIconButton,
  PropTypes
} from '@material-ui/core';

export interface SendMessageButtonProps {
  size?: 'small' | 'medium';
  color?: PropTypes.Color;
  disabled?: boolean;
  children: JSX.Element;
  onClick?: () => void;
}

const IconButton: React.FC<SendMessageButtonProps> = ({
  size = 'small',
  color = 'primary',
  disabled = false,
  children = null,
  ...props
}) => {
  return (
    <MuiIconButton
      size={size}
      color={color}
      disabled={disabled}
      {...props}
    >
      {children}
    </MuiIconButton>
  );
};

export default IconButton;
