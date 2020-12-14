export interface Currency {
  name: string;
  symbol: string;
  code: string;
}

export interface Price {
  value: number;
  formattedPrice: string;
}

export interface Product<P = Price> {
  id: string;
  name: string;
  price: P;
  photos: string[];
}
