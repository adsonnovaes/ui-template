// styles.ts
import styled, { css } from 'styled-components';
import { ButtonProps } from './types';

export const StyledButton = styled.button<ButtonProps>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 22px;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  ${(props) => getVariantStyles(props)}
  ${(props) => getSizeStyles(props)}
`;

export const getVariantStyles = (props: ButtonProps) => {
  console.log(props.backgroundColor)
  // const isPrimary = props.primary;
  const backgroundColor = props.backgroundColor ? props.backgroundColor : "#0089CC";
  const borderColor = props.borderColor ? props.borderColor : "#0089CC";
  
  if (props.type === 'outline') {
    return css`
      color: ${backgroundColor};
      background-color: transparent;
      border: 2px solid ${borderColor};
      &:hover {
        color: white;
        background-color: ${borderColor};
      }
    `;
  }

  if (props.type === 'link') {
    return css`
      color: ${backgroundColor};
      background-color: transparent;
      text-decoration: none;
      &:hover {
        opacity: 0.8;
        text-decoration: underline;
      }
    `;
  }

  // Default type
  return css`
    color: #ffffff;
    background-color: ${backgroundColor};
    border: 2px solid ${borderColor};
    &:hover {
      opacity: 0.8;
    }
  `;
};

export const getSizeStyles = (props: ButtonProps) => {
  const size = props.size;
  switch (size) {
    case 'small':
      return css`
        font-size: 12px;
        padding: 10px 16px;
      `;
    case 'large':
      return css`
        font-size: 16px;
        padding: 12px 24px;
      `;
    default:
      return css`
        font-size: 14px;
        padding: 11px 20px;
      `;
  }
};
