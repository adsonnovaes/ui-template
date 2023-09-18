import { Meta, StoryObj } from '@storybook/react';
import { Text } from './index';
import { TextProps } from './types';

export default {
  title: 'Atoms/Text',
  component: Text,
  args: {
    typetag: 'p',
    weight: 500,
    color: '#232323',
    children: 'Texto de exemplo',
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};
