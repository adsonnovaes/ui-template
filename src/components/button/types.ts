// types.ts
export interface ButtonProps {
  // primary: boolean;
  backgroundColor?: string;
  borderColor?: string;
  size: 'small' | 'medium' | 'large';
  label: string;
  onClick?: Function;
  type: 'default' | 'outline' | 'link'; // Adicionando novo tipo
}