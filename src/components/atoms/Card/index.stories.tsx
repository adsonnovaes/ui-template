// index.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import Card from "./index";
import { Text } from "../Text";
import { CardProps, AlignmentProps } from "./types";

export default {
  title: "Atoms/Card",
  component: Card,
  args: {
    content: (
      <>
        <div className="item-example">
          <Text typetag="h2" color="#ffffff">
            Conteúdo do card aqui
          </Text>
        </div>
        <div className="item-example">
          <Text typetag="h2" color="#ffffff">
            Outro elemento no card
          </Text>
        </div>
      </>
    ),
    direction: "column",
    gap: "10px",
  },
  argTypes: {
    alignment: {
      options: Object.keys(AlignmentProps),
      control: {
        type: "select",
      },
    },
  },
} as Meta<CardProps>;

export const Default: StoryObj<CardProps> = {};
