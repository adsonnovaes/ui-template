// types.ts
import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  showLabel?: boolean;
}

export enum InputType {
  text = 'text',
  password = 'password',
  email = 'email',
}
