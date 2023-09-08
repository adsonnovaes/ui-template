// Checkbox.tsx
import { useState } from 'react';
import { CheckboxProps } from './types';
import { StyledCheckbox } from './styles';

const Checkbox = ({
  label,
  checked: propChecked,
  ...rest
}: CheckboxProps) => {
  const [checked, setChecked] = useState(propChecked || false);

  const handleToggle = () => {
    const newChecked = !checked;
    setChecked(newChecked);
  };

  return (
    <StyledCheckbox {...rest}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleToggle}
      />
      {label && <label onClick={handleToggle}>{label}</label>}
    </StyledCheckbox>
  );
};

export default Checkbox;
