import styled from 'styled-components';

export const StyledRadio = styled.input`
  width: 15px;
  height: 15px;
  border: 2px solid #838383;
  border-radius: 50%;
  outline: none;
  margin-right: 8px;
  cursor: pointer;

  &:checked {
    border-color: #0089CC;
  }
`;

export const RadioLabel = styled.span``;
