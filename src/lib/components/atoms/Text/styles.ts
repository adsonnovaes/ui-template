import styled, { css } from 'styled-components';
import { TextProps, TextTypeTag } from './types';

export const StyledText = styled.span<TextProps>`
  font-family: 'Roboto', sans-serif;
  color: ${({ color }) => color || '#232323'};
  font-weight: ${({ weight }) => weight || 'normal'};
  display: block;

  ${({ typetag }) => {
    if (typetag === TextTypeTag.strong) {
      return css`
        font-weight: bold;
      `;
    }

    switch (typetag) {
      case TextTypeTag.h1:
        return 'font-size: 28px;';
      case TextTypeTag.h2:
        return 'font-size: 24px;';
      case TextTypeTag.h3:
        return 'font-size: 18px;';
      case TextTypeTag.h4:
        return 'font-size: 14px;';
      default:
        return 'font-size: 16px;';
    }
  }};
`;
