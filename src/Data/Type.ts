
export interface Product {
  id: number;
  title: string;
  price: number;
  image?: string; 
}

export interface ProductResponse {
  products: Product[];
}

export interface Card {
  title: string;
  desc: string;
  img: string;
}

export interface Feature {
  title: string;
  img: string;
}
