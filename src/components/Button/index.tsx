// button.tsx
import { ButtonProps } from './types';
import { StyledButton } from './styles';

export const Button = (props: ButtonProps & { onClick?: Function }) => (
  <StyledButton {...props}>
    {props.label}
  </StyledButton>
);
