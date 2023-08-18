// types.ts
import { HTMLProps } from 'react';

export interface CheckboxProps extends HTMLProps<HTMLInputElement> {
  label?: string;
  checked?: boolean;
}
