import { Meta, StoryObj } from '@storybook/react';
import { RadioProps } from '../Radio/types';
import Radio from './index';

export default {
  title: 'Atoms/Radio',
  component: Radio,
} as Meta;

export const Example: StoryObj<RadioProps> = {
  args: {
    checked: false,
    label: 'Rádio Individual',
  }
}
