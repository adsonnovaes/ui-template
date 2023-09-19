// button.tsx
import React, { forwardRef } from 'react';

import { ButtonProps } from "./types";
import { StyledButton } from "./styles";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...props }, ref) => (
    <StyledButton {...props} ref={ref}>
      {props.label}
    </StyledButton>
  )
);

export default Button;