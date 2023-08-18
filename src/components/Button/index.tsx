// button.tsx
import { ButtonProps } from './types';
import { StyledButton } from './styles';

export const Button = (props: ButtonProps) => (
  <StyledButton {...props}>
    {props.label}
  </StyledButton>
);
