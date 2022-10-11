import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { HeroSwatch } from "./HeroSwatch";

export default {
  component: HeroSwatch,
  argTypes: {
    color: { control: "color" },
  },
  args: {
    name: "Lupercal Green",
    color: "#002C2B",
    finish: "Satin",
    range: "Base",
  },
} as ComponentMeta<typeof HeroSwatch>;

const Template: ComponentStory<typeof HeroSwatch> = (args) => (
  <HeroSwatch {...args} />
);

export const Default = Template.bind({});
Default.args = {};
