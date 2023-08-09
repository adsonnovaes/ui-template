// import { CSSProperties } from 'react';

// import { ButtonProps } from './types';

// import './styles.css';

// const Button = ({
//   children,
//   gap,
//   justify
// } : ButtonProps) => {
//   const style: CSSProperties = {};

//   gap && (style.gap = gap);
//   justify && (style.justifyContent = justify);

//   return (
//     <button style={style}>
//       {children}
//     </button>
//   );
// }; 

// export default Button;

// import styled, { css } from 'styled-components';
// import { ButtonProps } from './types';

// const getVariantStyles = (props: ButtonProps) => {
//   const isPrimary = props.primary;
//   return isPrimary
//     ? css`
//         color: white;
//         background-color: #1ea7fd;
//       `
//     : css`
//         color: #333;
//         background-color: transparent;
//         box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
//       `;
// };

// const getSizeStyles = (props: ButtonProps) => {
//   const size = props.size;
//   switch (size) {
//     case 'small': {
//       return css`
//         font-size: 12px;
//         padding: 10px 16px;
//       `;
//     }
//     case 'large': {
//       return css`
//         font-size: 16px;
//         padding: 12px 24px;
//       `;
//     }
//     default: {
//       return css`
//         font-size: 14px;
//         padding: 11px 20px;
//       `;
//     }
//   }
// };

// const StyledButton = styled.button<ButtonProps>`
//   font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
//   font-weight: 700;
//   border: 0;
//   border-radius: 3em;
//   cursor: pointer;
//   display: inline-block;
//   line-height: 1;

//   ${(props) => getVariantStyles(props)}
//   ${(props) => getSizeStyles(props)}
//   ${({ backgroundColor }) =>
//     backgroundColor &&
//     css`
//       background-color: ${backgroundColor};
//     `}
// `;

// export const Button = (props: ButtonProps & { onClick?: Function }) => (
//   <StyledButton {...props}>{props.label}</StyledButton>
// );

import React from 'react';
import { ButtonProps } from './types';
import { StyledButton } from './styles';

export const Button = (props: ButtonProps & { onClick?: Function }) => (
  <StyledButton {...props}>{props.label}</StyledButton>
);




