// index.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { Input } from './index';
import { InputProps } from './types';

export default {
  title: 'Input',
  component: Input,
} as Meta<InputProps>;

export const Default: StoryObj<InputProps> = {
  args: {
    placeholder: 'Enter your text',
  }
};

export const WithLabel: StoryObj<InputProps> = {
  args: {
    showLabel: true,
    label: 'Input Label',
    placeholder: 'Enter your text',
  }
};

export const WithError: StoryObj<InputProps> = {
  args: {
    showLabel: true,
    label: 'Input Label',
    placeholder: 'Enter your text',
    error: 'This field is required',
  }
};

export const Disabled: StoryObj<InputProps> = {
  args: {
    showLabel: true,
    label: 'Input Label',
    placeholder: 'Enter your text',
    disabled: true,
  }
};
