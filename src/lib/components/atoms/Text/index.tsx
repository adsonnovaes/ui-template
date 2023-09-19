import React from 'react';

import { TextProps } from './types';
import { StyledText } from './styles';

const Text = (props: TextProps) => {
  return <StyledText as={props.typetag} {...props}>{props.children}</StyledText>;
};

export default Text;
