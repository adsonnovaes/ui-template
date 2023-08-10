// index.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { ButtonProps } from './types';

export default {
  title: 'Botão',
  component: Button,
  args: {
    label: 'Texto do Botão',
    // primary: true,
    size: 'medium',
    type: 'default', // Definindo o tipo padrão como 'default'
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};

export const Outline: StoryObj<ButtonProps> = {
  args: {
    type: 'outline', // Configurando o tipo 'outline' para essa história
  },
};

export const Link: StoryObj<ButtonProps> = {
  args: {
    type: 'link', // Configurando o tipo 'link' para essa história
  },
};
