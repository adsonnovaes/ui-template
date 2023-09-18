import { Meta, StoryObj } from '@storybook/react';

import { RadioOption, RadioGroupProps } from './types';
import RadioGroup from './index';

export default {
  title: 'Mulecules/Radio Group',
  component: RadioGroup,
  args: {
    direction: "column"
  },
} as Meta;

const radioOptions: RadioOption[] = [
  { label: 'Opção 1', value: 'option1' },
  { label: 'Opção 2', value: 'option2' },
  { label: 'Opção 3', value: 'option3' },
];

export const GroupExample: StoryObj<RadioGroupProps> = {
  args: {
    options: radioOptions,
    onChange: () => {},
  }
}
