// index.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import Button from './index';
import { ButtonProps } from './types';

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    label: 'Texto do Botão',
    // primary: true,
    size: 'medium',
    buttonType: 'default',
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};

export const Outline: StoryObj<ButtonProps> = {
  args: {
    buttonType: 'outline',
  },
};

export const Link: StoryObj<ButtonProps> = {
  args: {
    buttonType: 'link',
  },
};
