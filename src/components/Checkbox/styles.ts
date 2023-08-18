// styles.ts
import styled from 'styled-components';
import { CheckboxProps } from './types';

export const StyledCheckbox = styled.label<CheckboxProps>`
  display: flex;
  align-items: center;
  cursor: pointer;

  input {
    position: relative; 
    margin-right: 8px;
    width: 15px;
    height: 15px;
    border: 1px solid #838383;
    border-radius: 3px;
    appearance: none;
    outline: none;
    cursor: pointer;

    &:checked {
      background-color: #0089CC;
      border-color: #0089CC;
    }
  }

  /* Estilização do "check" */
  input:checked::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 6px;
    transform: translate(-50%, -50%) rotate(45deg);
    display: inline-block;
    width: 4px;
    height: 7px;
    border: solid white;
    border-width: 0 2px 2px 0;
  }

  label {
    user-select: none;
  }
`;
