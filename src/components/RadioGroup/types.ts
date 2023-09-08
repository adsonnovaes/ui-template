export enum AlignmentProps {
  'flex-start' = 'flex-start',
  center = 'center',
  'flex-end' = 'flex-end',
}

export interface RadioOption {
  label: string;
  value: string;
}

export interface RadioGroupProps {
  options: RadioOption[];
  direction?: 'row' | 'column';
  alignment?: AlignmentProps;
  onChange: (value: string) => void;
}

export interface RadioGroupStyleProps {
  direction?: 'row' | 'column';
  alignment?: AlignmentProps;
}
