import { forwardRef } from "react";
import { InputProps } from "./types";
import {
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
  StyledErrorText,
} from "./styles";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, showLabel = false, ...restProps }, inputRef) => {

    const id = `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <StyledInputWrapper>
        {showLabel && (
          <StyledLabel htmlFor={id} error={error}>
            {label}
          </StyledLabel>
        )}
        <StyledInput id={id} error={error} ref={inputRef} {...restProps} />
        {error && <StyledErrorText>{error}</StyledErrorText>}
      </StyledInputWrapper>
    );
  }
);

export default Input;
