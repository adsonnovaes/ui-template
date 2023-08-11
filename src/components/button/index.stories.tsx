// index.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';
import { ButtonProps } from './types';

export default {
  title: 'Botão',
  component: Button,
  args: {
    label: 'Texto do Botão',
    // primary: true,
    size: 'medium',
    type: 'default',
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};

export const Outline: StoryObj<ButtonProps> = {
  args: {
    type: 'outline',
  },
};

export const Link: StoryObj<ButtonProps> = {
  args: {
    type: 'link',
  },
};
