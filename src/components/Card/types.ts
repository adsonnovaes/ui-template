// types.ts
export enum AlignmentProps {
  'flex-start' = 'flex-start',
  center = 'center',
  'flex-end' = 'flex-end',
}

export interface CardProps {
  direction?: 'row' | 'column';
  alignment?: AlignmentProps;
  gap?: string;
  content: React.ReactNode;
}