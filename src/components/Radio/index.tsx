import React from "react";
import { RadioProps } from "./types";
import { StyledRadio, RadioLabel } from "./styles";

const Radio = ({ checked, label, onChange, ...rest }: RadioProps) => {
  return (
    <label>
      <StyledRadio 
        type="radio" 
        checked={checked} 
        onChange={onChange} 
        {...rest}
      />
      {label && <RadioLabel>{label}</RadioLabel>}
    </label>
  );
};

export default Radio;
