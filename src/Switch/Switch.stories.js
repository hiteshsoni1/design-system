import React from "react";
import Switch from "./Switch";
export default {
  title: "Custom/Switch",
  argTypes: {
    size: { control: "range" },
    color: { control: "color" },
    onClick: { action: "clicked" },
  },
  parameters: { actions: { argTypesRegex: "^on.*" } },
};

const template = (args) => <Switch {...args} />;
export const Primary = template.bind({});
Primary.args = {
  check: true,
  color: "red",
  size: 40,
  disabled: false,
};
