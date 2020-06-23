import * as React from 'react';
import { StyledButton } from './style';

interface IProps {
  alternative?: boolean;
}

export const Button: React.FC<IProps> = ({ alternative = false, children }) => (
  <StyledButton alternative={alternative}>
    {children}
  </StyledButton>
);
