export enum TextTypeTag {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  p = 'p',
  span = 'span',
  small = 'small',
  strong = 'strong',
}

export interface TextProps {
  typeTag: keyof typeof TextTypeTag;
  weight?: number;
  color?: string;
  children: React.ReactNode;
  className?: string;
}
