import { FC } from "react";
import tw from "twin.macro";
import { Product } from "../../types/data";
import { Button } from "../button/button";

const ProductWrapper = tw.div`shadow bg-white max-w-sm rounded-lg overflow-hidden`;

const ProductImageWrapper = tw.div`p-6 bg-gray-100`;

const ProductImage = tw.img`w-full		`;

const ProductDescription = tw.div`p-6`;

const ProductTitle = tw.h2`font-sans text-base font-normal`;

const ProductPrice = tw.p`font-sans text-lg	font-bold	 text-white`;

const ProductActions = tw.div`flex items-center justify-between px-4 py-2 bg-gray-900`;

export interface ProductCardProps {
  product: Pick<Product, "name" | "photos" | "price">;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <ProductWrapper>
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
