import { Story, Meta } from "@storybook/react";
import { SelectCurrency, SelectCurrencyProps } from "./selectCurrency";
import { currenciesMock } from "../../mocks/currencies";

export default {
  title: "SelectCurrency",
  component: SelectCurrency,
  argTypes: {},
} as Meta;

const Template: Story<SelectCurrencyProps> = (args) => (
  <SelectCurrency {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  currencies: currenciesMock,
  setCurrency: () => {},
};
