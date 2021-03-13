import React from 'react';
import { IconButton as MuiIconButton } from '@material-ui/core';
import { PropTypes, useTheme } from '@material-ui/core';
import { Palette } from '@material-ui/core/styles/createPalette';

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
