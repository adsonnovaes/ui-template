// card.tsx
import { CardProps } from './types';
import { StyledCard } from './styles';

export const Card = (props: CardProps) => (
  <StyledCard {...props}>
    {props.content}
  </StyledCard>
);
