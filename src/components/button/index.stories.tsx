import { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { ButtonProps } from './types';

export default {
  title: 'Botão',
  component: Button,
  args: {
    label: 'Texto do Botão',
    primary: true,
    size: 'medium',
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};