import React, { useState } from 'react';

import { RadioGroupProps } from './types';
import Radio from '../Radio';

const RadioGroup: React.FC<RadioGroupProps> = ({ options, onChange }) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined);

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <div>
      {options.map(option => (
        <Radio
          key={option.value}
          checked={selectedValue === option.value}
          label={option.label}
          onChange={() => handleRadioChange(option.value)}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
