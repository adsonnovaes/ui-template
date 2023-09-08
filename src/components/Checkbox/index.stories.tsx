// index.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import Checkbox from './index';
import { CheckboxProps } from './types';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {
  args: {
    label: 'Checkbox Label',
  }
};
