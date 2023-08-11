// styles.ts
import styled from 'styled-components';
import { CardProps } from './types';

export const StyledCard = styled.div<CardProps>`
  font-family: 'Roboto', sans-serif;
  background: #ffffff;

  border-radius: 6px;
  border: 1px solid #dfdfdf;

  padding: 20px;

  gap: ${props => props.gap || '10px'};

  display: flex;
  flex-direction: ${props => props.direction || 'column'};
  justify-content: ${props => props.alignment || 'flex-start'};

  .item-example {
    background: #dcdcdc;
    border-radius: 4px;

    padding: 10px;

    display: flex;
    align-items: center; 
    justify-content: center;
  }
`;
