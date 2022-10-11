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

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};
