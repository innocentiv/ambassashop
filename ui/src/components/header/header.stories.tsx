import { Header, HeaderProps } from "./header";
import { Story, Meta } from "@storybook/react";
import { currenciesMock } from "../../mocks/currencies";

export default {
  title: "Header",
  component: Header,
  argTypes: {},
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  currencies: currenciesMock,
  setCurrency: () => {},
};
