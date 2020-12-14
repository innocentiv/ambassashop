import { ProductList, ProductListProps } from "./productList";
import { Story, Meta } from "@storybook/react";
import { productsMocks } from "../../mocks/products";

export default {
  title: "Product List",
  component: ProductList,
  argTypes: {},
} as Meta;

const Template: Story<ProductListProps> = (args) => <ProductList {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  products: productsMocks,
};
