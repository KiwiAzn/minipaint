import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SwatchListItem } from "./SwatchListItem";

export default {
  component: SwatchListItem,
  argTypes: {
    color: { control: "color" },
  },
  args: {
    name: "Lupercal Green",
    color: "#002C2B",
    finish: "Satin",
    range: "Base",
  },
} as ComponentMeta<typeof SwatchListItem>;

const Template: ComponentStory<typeof SwatchListItem> = (args) => (
  <SwatchListItem {...args} />
);

export const Default = Template.bind({});
Default.args = {};
