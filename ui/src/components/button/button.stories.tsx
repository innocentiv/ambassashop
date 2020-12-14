import { Story, Meta } from "@storybook/react";
import { ButtonHTMLAttributes } from "react";
import { Button } from "./button";

export default {
  title: "Button",
  component: Button,
  argTypes: {},
} as Meta;

const Template: Story<ButtonHTMLAttributes<HTMLButtonElement>> = (args) => (
  <Button {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  children: "Primary Button",
};
