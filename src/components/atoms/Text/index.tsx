import { TextProps } from './types';
import { StyledText } from './styles';

export const Text = (props: TextProps) => {
  return <StyledText as={props.typetag} {...props}>{props.children}</StyledText>;
};

