import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SwatchWithBrandListItem } from "./SwatchWithBrandListItem";

export default {
  component: SwatchWithBrandListItem,
  argTypes: {
    color: { control: "color" },
  },
  args: {
    brand: "Games Workshop",
    name: "Lupercal Green",
    color: "#002C2B",
    finish: "Satin",
    range: "Base",
  },
} as ComponentMeta<typeof SwatchWithBrandListItem>;

const Template: ComponentStory<typeof SwatchWithBrandListItem> = (args) => (
  <SwatchWithBrandListItem {...args} />
);

export const Default = Template.bind({});
Default.args = {};
