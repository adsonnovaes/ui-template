// button.tsx
import { ButtonProps } from './types';
import { StyledButton } from './styles';

const Button = (props: ButtonProps) => (
  <StyledButton {...props}>
    {props.label}
  </StyledButton>
);

export default Button;