import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Swatch } from "./Swatch";

export default {
  component: Swatch,
  argTypes: {
    color: { control: "color" },
  },
  args: {
    color: "#002C2B",
  },
} as ComponentMeta<typeof Swatch>;

const Template: ComponentStory<typeof Swatch> = (args) => <Swatch {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  size: "xl",
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "md",
};

export const Small = Template.bind({});
Small.args = {
  size: "sm",
};
