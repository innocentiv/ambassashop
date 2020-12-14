import { ProductCard, ProductCardProps } from "./productCard";
import { Story, Meta } from "@storybook/react";
import { productsMocks } from "../../mocks/products";

export default {
  title: "Product Card",
  component: ProductCard,
  argTypes: {},
} as Meta;

const Template: Story<ProductCardProps> = (args) => <ProductCard {...args} />;

export const Primary = Template.bind({});

export const TallImage = Template.bind({});

Primary.args = {
  product: productsMocks[0],
};

TallImage.args = {
  product: productsMocks[1],
};
