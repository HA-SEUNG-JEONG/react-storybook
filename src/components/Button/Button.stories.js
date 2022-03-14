import React from "react";
import Button from "./Button";

export default {
  title: "Form/Button",
  component: Button,
};

const Template = (args) => <Button {...args}></Button>;

export const Success = Template.bind({});
Success.args = {
  variantColor: "green",
  children: "Success",
};

export const Danger = Template.bind({});
Danger.args = {
  variantColor: "green",
  children: "Danger",
};
