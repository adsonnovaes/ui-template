// card.tsx
import React from 'react';

import { CardProps } from './types';
import { StyledCard } from './styles';

const Card = (props: CardProps) => (
  <StyledCard {...props}>
    {props.content}
  </StyledCard>
);

export default Card;