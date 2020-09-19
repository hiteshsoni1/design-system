import React from "react";
import { action } from "@storybook/addon-actions";
import CheckBox from "./CheckBox";
export default {
  title: "Custom/Checkbox",
  component: CheckBox,
  argTypes: {
    size: { control: "range" },
    color: { control: "color" },
  },
};

const template = (args) => <CheckBox {...args} />;
export const Primary = template.bind({});
Primary.args = {
  check: false,
  size: 20,
  disabled: false,
  color: "red",
};

export const Secondary = template.bind({});
Secondary.args = {
  check: false,
  size: 40,
  disabled: false,
  color: "orange",
};
