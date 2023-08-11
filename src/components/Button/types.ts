import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  backgroundColor?: string;
  borderColor?: string;
  size: 'small' | 'medium' | 'large';
  label: string;
  buttonType: 'default' | 'outline' | 'link';
}