import styled from 'styled-components';
import { RadioGroupStyleProps } from './types';

export const StyledRadioGroup = styled.div<RadioGroupStyleProps>`
  display: flex;

  flex-direction: ${props => props.direction || 'column'};
  justify-content: ${props => props.alignment || 'flex-start'};
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const StyledRadio = styled.input`
  margin-right: 8px;
`;
