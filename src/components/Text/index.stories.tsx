import { Meta, StoryObj } from '@storybook/react';
import { Text } from './index';
import { TextProps } from './types';

export default {
  title: 'Text',
  component: Text,
  args: {
    typeTag: 'p',
    weight: 500,
    color: '#232323',
    children: 'Texto de exemplo',
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};
