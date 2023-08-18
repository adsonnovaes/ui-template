// index.tsx
import { InputProps } from './types';

import {
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
  StyledErrorText,
} from './styles';

export const Input = ({
  label,
  error,
  showLabel = false,
  ...restProps
}: InputProps) => {
  const id = `input-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <StyledInputWrapper>
      {showLabel && <StyledLabel htmlFor={id} error={error}>{label}</StyledLabel>}
      <StyledInput id={id} error={error} {...restProps} />
      {error && <StyledErrorText>{error}</StyledErrorText>}
    </StyledInputWrapper>
  );
};
