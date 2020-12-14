import { FC } from "react";
import { useProducts } from "../../app/apollo";
import { Product } from "../../types/data";
import { ProductCard } from "../productCard/productCard";
import tw from "twin.macro";

export interface ConnectedProductListProps {
  currency: string;
}

export interface ProductListProps {
  products: Product[];
}

const WidthContainer = tw.div`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 md:py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4`;

export const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <WidthContainer>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} tw="w-1/3" />
      ))}
    </WidthContainer>
  );
};

export const ConnectedProductList: FC<ConnectedProductListProps> = ({
  currency,
}) => {
  const { data } = useProducts(currency);
  return data ? <ProductList products={data.products} /> : null;
};
