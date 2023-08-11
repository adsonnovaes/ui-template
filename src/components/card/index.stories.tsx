// index.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { Card } from './index';
import { CardProps, AlignmentProps } from './types';

export default {
  title: 'Card',
  component: Card,
  args: {
    content: (
      <>
        <div className="item-example">
          <p>Conteúdo do card aqui</p>
        </div>
        <div className="item-example">
          <p>Outro elemento no card</p>
        </div>
      </>
    ),
    direction: 'column',
    gap: '10px',
  },
  argTypes: {
    alignment: {
      options: Object.keys(AlignmentProps),
      control: {
        type: 'select',
      }
    }
  }
} as Meta<CardProps>;

export const Default: StoryObj<CardProps> = {};
