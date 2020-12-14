import { FC } from "react";
import tw, { styled } from "twin.macro";
import { Product } from "../../types/data";
import { Button } from "../button/button";

const ProductWrapper = tw.div`flex flex-col	shadow bg-white max-w-sm rounded-lg overflow-hidden`;

const ProductImageWrapper = styled.div`
  padding-top: 100%;
  ${tw`relative bg-gray-100`}
`;

const ProductImage = tw.img`block absolute inset-0 object-contain p-6 w-full h-full`;

const ProductDescription = tw.div`p-6 flex-grow`;

const ProductTitle = tw.h2`font-sans text-base font-normal`;

const ProductPrice = tw.p`font-sans text-lg	font-bold	 text-white`;

const ProductActions = tw.div`flex items-center justify-between px-4 py-2 bg-gray-900`;

export interface ProductCardProps {
  className?: string;
  product: Pick<Product, "name" | "photos" | "price">;
}

export const ProductCard: FC<ProductCardProps> = ({ product, className }) => {
  return (
    <ProductWrapper className={className}>
      <ProductImageWrapper>
        <ProductImage src={product.photos[0]} />
      </ProductImageWrapper>
      <ProductDescription>
        <ProductTitle>{product.name}</ProductTitle>
      </ProductDescription>
      <ProductActions>
        <ProductPrice>{product.price.formattedPrice}</ProductPrice>
        <Button>Add to cart</Button>
      </ProductActions>
    </ProductWrapper>
  );
};
