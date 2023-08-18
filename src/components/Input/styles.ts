// styles.ts
import styled, { css } from 'styled-components';
import { InputProps } from './types';

export const StyledInputWrapper = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input<InputProps>`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;

  padding: 10px;
  border: 1px solid #e4e4e4;

  outline: none;
  transition: border-color 0.3s;
  color: #232323;

  ${props => props.error && css`
    border-color: #d03314;
  `}
  
  ${props => props.disabled && css`
    background-color: #e3e3e3;
    cursor: not-allowed;
  `}

  &:focus {
    border-color: #55b0dd;
  }
`;

export const StyledLabel = styled.label<InputProps>`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;

  color: #232323;
  
  margin-bottom: 4px;
`;

export const StyledErrorText = styled.span`
  color: #d03314;
  font-size: 12px;
  margin-top: 4px;
`;
