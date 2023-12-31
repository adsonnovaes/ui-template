import React, { useState } from 'react';

import { RadioGroupProps } from './types';

import { StyledRadioGroup } from './styles';
import Radio from '../../atoms/Radio';

const RadioGroup = ({ options, onChange, ...props } : RadioGroupProps) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined);

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <StyledRadioGroup
      {...props}
    >
      {options.map(option => (
        <Radio
          key={option.value}
          checked={selectedValue === option.value}
          label={option.label}
          onChange={() => handleRadioChange(option.value)}
        />
      ))}
    </StyledRadioGroup>
  );
};

export default RadioGroup;
